#!/bin/bash
echo "updating"
apt update

echo "upgrading"
apt upgrade

echo "install nodejs"
apt install nodejs

echo "install npm"
apt install npm

echo "installing from package.json"
npm install