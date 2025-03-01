## Overview

A quick way to host a mainnet ln node without syncing the whole blockchain. Create a wallet in a few minutes.

## Clone

`git clone https://github.com/leon-do/mainnet-neutrino-lnd.git`

`cd mainnet-neutrino-lnd`

## If you're installing from scratch (ubuntu)

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
  "seed": "absent unhappy glimpse blast sun oblige seven fat attack kick pistol pepper daring hint voyage box snow fantasy amused lawsuit acid together install approve",
  "password": "absentunhappyglimpseblastsunobligesevenfatattackkickpistolpepperdaringhintvoyageboxsnowfantasyamusedlawsuitacidtogetherinstallapprove",
  "connect": "lndconnect://208.47.135.18:10009?cert=MIICXzCCAgWgAwIBAgIQXgDO8DPoZCfY8c1Cg7Ml6TAKBggqhkjOPQQDAjBDMR8wHQYDVQQKExZsbmQgYXV0b2dlbmVyYXRlZCBjZXJ0MSAwHgYDVQQDExdsZW9ucy1NYWNCb29rLVByby5sb2NhbDAeFw0xOTA1MjEyMDI3NDBaFw0yMDA3MTUyMDI3NDBaMEMxHzAdBgNVBAoTFmxuZCBhdXRvZ2VuZXJhdGVkIGNlcnQxIDAeBgNVBAMTF2xlb25zLU1hY0Jvb2stUHJvLmxvY2FsMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEvUBluRlAWUxcEvlgezLxUnYQL_XLSLo5scGzWklhyiL6e1okNAqJ7WUV4mDtY16YzzLLRon5_ZuEMXPJun0EVqOB2jCB1zAOBgNVHQ8BAf8EBAMCAqQwDwYDVR0TAQH_BAUwAwEB_zCBswYDVR0RBIGrMIGoghdsZW9ucy1NYWNCb29rLVByby5sb2NhbIIJbG9jYWxob3N0ggR1bml4ggp1bml4cGFja2V0hwR_AAABhxAAAAAAAAAAAAAAAAAAAAABhxD-gAAAAAAAAAAAAAAAAAABhwSsEAL8hxD-gAAAAAAAAKR1F__-XlxDhxD-gAAAAAAAAGUk86HKzXcNhxD-gAAAAAAAAK7eSP_-ABEihwSp_tgMhwTQL4cSMAoGCCqGSM49BAMCA0gAMEUCIB5iPdSOc7Wm4Rl403Hq_42uOx-C0YqvDcsMJuCpiUdzAiEAihWJtFNWSk6_0cwumQY9DJsdJ1IWpLZoELBuayxUEU8&macaroon=AgEDbG5kAs8BAwoQkaJnhbsAh4YlB7sCnOE74RIBMBoWCgdhZGRyZXNzEgRyZWFkEgV3cml0ZRoTCgRpbmZvEgRyZWFkEgV3cml0ZRoXCghpbnZvaWNlcxIEcmVhZBIFd3JpdGUaFgoHbWVzc2FnZRIEcmVhZBIFd3JpdGUaFwoIb2ZmY2hhaW4SBHJlYWQSBXdyaXRlGhYKB29uY2hhaW4SBHJlYWQSBXdyaXRlGhQKBXBlZXJzEgRyZWFkEgV3cml0ZRoSCgZzaWduZXISCGdlbmVyYXRlAAAGILfMl16yL9UW9Od3lIu-xVePO7v_RadUTDvmpgZZmFlV",
  "cert": "2d2d2d2d2d424547494e2043455254494649434154452d2d2d2d2d0a4d494943587a43434167576741774942416749515867444f3844506f5a4366593863314367374d6c3654414b42676771686b6a4f50515144416a42444d5238770a485159445651514b45785a73626d5167595856306232646c626d56795958526c5a43426a5a584a304d5341774867594456515144457864735a5739756379314e0a59574e43623239724c5642796279357362324e6862444165467730784f5441314d6a45794d4449334e444261467730794d4441334d5455794d4449334e4442610a4d454d78487a416442674e5642416f54466d78755a434268645852765a3256755a584a686447566b49474e6c636e51784944416542674e5642414d544632786c0a6232357a4c55316859304a766232737455484a764c6d7876593246734d466b77457759484b6f5a497a6a3043415159494b6f5a497a6a304441516344516741450a7655426c75526c415755786345766c67657a4c78556e59514c2f584c534c6f357363477a576b6c6879694c3665316f6b4e41714a37575556346d4474593136590a7a7a4c4c526f6e352f5a75454d58504a756e304556714f42326a4342317a414f42674e56485138424166384542414d434171517744775944565230544151482f0a42415577417745422f7a43427377594456523052424947724d49476f676864735a5739756379314e59574e43623239724c5642796279357362324e686249494a0a6247396a5957786f62334e3067675231626d6c3467677031626d6c346347466a613256306877522f4141414268784141414141414141414141414141414141410a414141426878442b67414141414141414141414141414141414141426877537345414c386878442b6741414141414141414b5231462f2f2b586c78446878442b0a67414141414141414147556b3836484b7a58634e6878442b6741414141414141414b376553502f2b41424569687753702f74674d687754514c3463534d416f470a43437147534d343942414d43413067414d455543494235695064534f6337576d34526c34303348712f3432754f782b43305971764463734d4a7543706955647a0a416945416968574a74464e57536b362f306377756d515939444a73644a314957704c5a6f454c4275617978554555383d0a2d2d2d2d2d454e442043455254494649434154452d2d2d2d2d0a",
  "macaroon": "0201036c6e6402cf01030a1091a26785bb0087862507bb029ce13be11201301a160a0761646472657373120472656164120577726974651a130a04696e666f120472656164120577726974651a170a08696e766f69636573120472656164120577726974651a160a076d657373616765120472656164120577726974651a170a086f6666636861696e120472656164120577726974651a160a076f6e636861696e120472656164120577726974651a140a057065657273120472656164120577726974651a120a067369676e6572120867656e657261746500000620b7cc975eb22fd516f4e777948bbec5578f3bbbff45a7544c3be6a60659985955"
  "socket": "157.230.222.106:10009"
}
```

![](https://i.imgur.com/FYInPky.png)

Or use cert, macaroon (in base64) and socket to [connect](https://github.com/alexbosworth/ln-service#using-grpc)


## Use cli

Linux

`./lncli-linux --lnddir ./lnd getinfo`

OSX

`./lncli-darwin --lnddir ./lnd getinfo`

## Note

open ports 10009 and 9735

To compile yourself, remove https://github.com/lightningnetwork/lnd/blob/4806003b74830c1ad23a56588a54875378fe75ea/config.go#L772
```golang
  if cfg.Bitcoin.Node == "neutrino" && cfg.Bitcoin.MainNet {
    str := "%s: neutrino isn't yet supported for " +
      "bitcoin's mainnet"
    err := fmt.Errorf(str, funcName)
    return nil, err
  }
```
