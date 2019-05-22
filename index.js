process.env.LNSERVICE_LND_DIR="./lnd"
const {spawn} = require('child_process')
const fs = require('fs')
const lnService = require('ln-service')
const createSeed = require('ln-service/createSeed')
const createWallet = require('ln-service/createWallet')
const unlockWallet = require('ln-service/unlockWallet')
const publicIp = require('public-ip')
const base64url = require('base64url')

start()
async function start() {
  // append conf
  await appendConf()

  // start lnd
  spawn(`./lnd-${process.platform}`, ['--lnddir=./lnd'])
  .stdout.on('data', (data) => {
    console.log(data.toString());
  });

  // wait for lnd to create tls.cert
  await pause(10000)

  // check if wallet exists
  if (fs.existsSync('./lnd/data/chain/bitcoin/mainnet/wallet.db')) {
    unlockExistingWallet()
  } else {
    createNewWallet()
  } 

}

async function unlockExistingWallet() {
  // connect to lnd
  const lnd = lnService.lightningDaemon({
    cert: Buffer.from(fs.readFileSync('./lnd/tls.cert'), 'base64').toString('hex'),
    macaroon: Buffer.from(fs.readFileSync('./lnd/data/chain/bitcoin/mainnet/admin.macaroon'), 'base64').toString('hex'),
    socket: '127.0.0.1:10009',
    service: 'WalletUnlocker'
  })

  // get password
  const secret = await JSON.parse(fs.readFileSync('./lnd/secret.json').toString())

  // unlock wallet
  await unlockWallet({
    lnd,
    password: secret.password
  })

}

async function createNewWallet() {
  // get cert string
  const cert = Buffer.from(fs.readFileSync('./lnd/tls.cert'), 'base64').toString('hex')

  // connect to lnd without macaroon
  const lnd = lnService.lightningDaemon({
    cert,
    service: 'WalletUnlocker',
    socket: '127.0.0.1:10009'
  })

  // create seed
  const seed = (await createSeed({lnd})).seed

  // password to unlock wallet
  const password = seed.split(' ').join('')

  // create wallet
  await createWallet({
    lnd,
    password,
    seed
  })

  // wait to for lnd to create files
  await pause(10000)

  // generate lnconnect string
  const connect = await lndconnect()

  // get macaroon string
  const macaroon = Buffer.from(fs.readFileSync('./lnd/data/chain/bitcoin/mainnet/admin.macaroon'), 'base64').toString('hex')

  // ip
  const address = await publicIp.v4()
  const port = '10009'
  const url = `${address}:${port}`

  // create new secret.json file
  fs.writeFileSync('./lnd/secret.json', JSON.stringify({seed, password, connect, cert, macaroon, url}, null, 2))

  console.log({seed, password, connect, cert, macaroon, url})
}

async function lndconnect() {
  // ip
  const address = await publicIp.v4()
  const port = '10009'
  const url = `${address}:${port}`

  // open tls.cert file
  const certFile = fs.readFileSync('./lnd/tls.cert', 'utf8');

  // remove '-----BEGIN CERTIFICATE-----', '-----END CERTIFICATE-----' and line breaks
  let lines = certFile.split(/\n/);
  lines = lines.filter(line => line != "");
  lines.pop();
  lines.shift();
  const cert = base64url.fromBase64(lines.join(''));

  // open macaroon file in base64 encoding
  const macaroonPath = './lnd/data/chain/bitcoin/mainnet/admin.macaroon' 
  const macaroonData = fs.readFileSync(macaroonPath);
  const macaroon = base64url(Buffer.from(macaroonData));

  return 'lndconnect://' + url + '?cert=' + cert + '&macaroon=' + macaroon
}

async function appendConf() {
  // check if tlsextraip flag exists
  const conf = fs.readFileSync('./lnd/lnd.conf').toString()
  if (!conf.includes('tlsextraip')) {
    // append tlsextraip to lnd.conf
    const ip = await publicIp.v4()
    const tlsextraip= `\ntlsextraip=${ip}`
    const externalip = `\nexternalip=${ip}` 
    fs.appendFileSync('./lnd/lnd.conf', tlsextraip)
    fs.appendFileSync('./lnd/lnd.conf', externalip)
  }
}

function pause(ms) {
  return new Promise(res => {
    setTimeout(() => {
      res()
    }, ms)
  }, ms)
}