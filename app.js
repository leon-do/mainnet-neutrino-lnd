const fs = require('fs')
const lnService = require('ln-service')

const lnd = lnService.lightningDaemon({
  cert: fs.readFileSync('./lnd/tls.cert').toString('base64'),
  macaroon: fs.readFileSync('./lnd/data/chain/bitcoin/mainnet/admin.macaroon').toString('base64'),
  socket: '127.0.0.1:10009',
});

// https://www.npmjs.com/package/ln-service
lnService.getWalletInfo({lnd}, (error, result) => {
  console.log(result);
});