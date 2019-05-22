Clone

`git clone https://github.com:leon-do/mainnet-neutrino-lnd.git`

`cd mainnet-neutrino-lnd`

If you're installing from scratch (linux): 

`sudo sh install.sh`

Install dependencies: 

`npm install`

Start lnd: 

`node index.js`

or start lnd as daemon: 

`pm2 start index.js`

Display secret: 

`cat ./lnd/secret.json`

Use cli: 

`./lncli-linux --lnddir ./lnd getinfo`

Note: open ports 10009 and 9735
