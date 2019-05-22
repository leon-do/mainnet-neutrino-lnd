## Overview

A quick way to host a mainnet ln node without syncing the whole blockchain. Create a wallet in a few minutes.

## Clone

`git clone https://github.com:leon-do/mainnet-neutrino-lnd.git`

`cd mainnet-neutrino-lnd`

## If you're installing from scratch (linux)

`sudo sh install.sh`

## Install dependencies

`npm install`

## Start lnd

`node index.js`

or start lnd as daemon

`pm2 start index.js`

## Display secret to connect to zap wallet

`cat ./lnd/secret.json`

```
{
  "seed": "above kid cool during shoe orient gold try midnight loyal brse man illegal machine melody army roof drip survey nut anger switch ig",
  "password": "abovekidcoolduringshoeorientgoldtrymidnightloyalbringelslegalmachinemelodyarmyroofdripsurveynutangerswitchignore",
  "connect": "lndconnect://208.47.135.18:10009?cert=MIIB8TCCAZegAwIBAgImRm6DKro6l0E1c4OdUwCgYIKoZIzj0EAwIwMzEfMB0GA1UEChMWbG5kIGF1dG9nZW5lcmF0VydDEQMA4GA1UEAxMHbHVidW50dTAeFw0xOTA1MjExNzE4NDdaFw0yMDA3MTUxNzE4NDdaMdBgNVBAoTFmxuZCBhdXRvZ2VuZXJhdGVkIGNlcnQxEDAOBgNVBAMTB2x1YnVudHUwWTATBgPQIBBggqhkjOPQMBBwNCAASgnOTVH9fwBgSKQYOGc7vjZFCzPlf-qiusSyMZvQ8YG0oXjrm6jzG4xZhjF5vs6gLd4Qhg1fzWW25Gc1o4GLMIGIMA4GA1UdDwEB_wQEAwICpDAPBgNVHRMBADAQH_MGUGA1UdEQReMFyCB2x1YnVudHWCCWxvY2FsaG9zdIIEdW5peIIKdW5peHBhY2tldAAYcQAAAAAAAAAAAAAAAAAAAAAYcECgACD4cQ_oAAAAAAAACwY8nfGhpdzYcE0C-HEjAKBgPQQDAgNIADBFAiEAxuqDxAgmOS40MJBG97c1EinJ8633gawETlfbkOGbjv0CIAxseePRjK8fVxdxmYzF8OtjeuYFM4XuTsfs6X&macaroon=AgEDbG5kAs8BAwoQK3y7Zu-7uhI88GdNryMBoWCgdhZGRyZXNzEgRyZWFkEgV3cml0ZRoTCgRpbmZvEgRyZWFkEgV3cml0ZRoXCghpbnZxIEcmVhZBIFd3JpdGUaFgoHbWVzc2FnZRIEcmVhZBIFd3JpdGUaFwoIb2ZmY2hhaW4SBHJldyaXRlGhYKB29uY2hhaW4SBHJlYWQSBXdyaXRlGhQKBXBlZXJzEgRyZWFkEgV3cml0ZRoSCuZXISCGdlbmVyYXRlAAAGIFrZ8V3pMTB4K8i4bv4taCT3hRvAlHGFX9zAwVKpZqoA"
}
```

![](https://i.imgur.com/FYInPky.png)

## Use cli: 

`./lncli-linux --lnddir ./lnd getinfo`

## Note: 

open ports 10009 and 9735
