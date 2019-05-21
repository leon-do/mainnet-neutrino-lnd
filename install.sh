#!/bin/bash
echo "updating"
apt-get update

echo "upgrading"
apt-get upgrade

echo "installing npm"
apt install npm

echo "installing node"
npm install -g n

echo "installing pm2"
npm install -g pm2

echo "installing node-gyp"
npm install -g node-gyp

echo "installing packages"
npm install

echo "updating node to latest version"
n latest

echo "start lnd"
pm2 start index.js
