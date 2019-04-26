const publicIp = require('public-ip')
const fs = require('fs')

setup()
async function setup() {
  // check if tlsextraip flag exists
  const conf = fs.readFileSync('./lnd/lnd.conf').toString()
  if (!conf.includes('tlsextraip')) {
    // append tlsextraip to lnd.conf
    const ip = await publicIp.v4()
    const tlsextraip= `\ntlsextraip=${ip}`
    fs.appendFileSync('./lnd/lnd.conf', tlsextraip)
  }
}