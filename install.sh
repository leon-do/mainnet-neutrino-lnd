#!/bin/bash
echo "updating"
apt update

echo "upgrading"
apt upgrade

echo "installing npm"
apt install npm

echo "installing node"
npm install -g n

echo "updating node to lts"
n lts

echo "installing pm2"
npm install -g pm2

echo "installing packages"
npm install

echo "start lnd"
pm2 start index.js
