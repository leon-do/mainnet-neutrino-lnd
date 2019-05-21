#!/bin/bash
echo "updating"
apt update

echo "upgrading"
apt upgrade

echo "get curl"
apt get curl

echo "installing docker"
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

echo "building..."
docker build -t neutrino ./

echo "running..."
docker run -p 10009:10009 neutrino 
