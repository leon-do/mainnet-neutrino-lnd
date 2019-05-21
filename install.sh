#!/bin/bash
echo "updating"
sudo apt-get update

echo "upgrading"
sudo apt-get upgrade

echo "installing npm"
sudo apt install npm

echo "installing node"
npm install -g n

echo "updating node to lts"
sudo n lts

echo "installing node-gyp"
npm install -g node-gyp

echo "installing pm2"
npm install -g pm2

echo "installing packages"
npm install

echo "start lnd"
pm2 start index.js