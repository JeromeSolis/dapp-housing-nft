# Lots of Houses
###### Udacity Housing NFT Blockchain Capstone Project

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product.
The 10 tokens were minted using the `mint.js` script and can be accessed through the OpenSea storefront at the address below.

[OpenSea Marketplace Storefront](https://testnets.opensea.io/collection/lots-of-houses)

## Contract Testing and ABI

All the contract can be tested by using the following command from the `<PATH-TO-PROJECT-REPO>/eth-contracts/` folder:
```
truffle test
```
The current testing configuration found in `truffle-config.js` is listenning to `port 7545` and does require the Ganache desktop app to be running. One can use the Ganache CLI by simply changing the port to `8545`.
The `SolnSquareVerifier.sol` contract ABI can be found in the JSON file located at `<PATH-TO-PROJECT-REPO>/eth-contracts/build/contracts/SolnSquareVerifier.json`. It can also be directly be imported by using the following script:
```
const fs = require("fs");
const contract = JSON.parse(fs.readFileSync("<PATH-TO-PROJECT-REPO>/eth-contracts/build/contracts/SolnSquareVerifier.json"));
const contractABI = contract.abi; # This is the contract ABI
```
An example of how to interact with the contract can be found in the `<PATH-TO-PROJECT-REPO>/eth-contracts/mint.js` script.

## Contract Addresses (Rinkeby Testnet)

* 0xdA3BA15c09cddb4d8Fa781C7F079A1EF82f71065 (`Verifier`)
* 0x1D0E2281faB2db187B4B4e025f3568dF76a942E1 (`SolnSquareVerifier`)

## Token Minted

* 0xc828f721531d818fa88c2a899f952e7abc753318c11d4b39858d3d41c135b890
* 0x4302bf5745217eaf9099cc177567c95f980599ea5bbcfb776ab088e9dd2ea0fa
* 0xbcf0d7b4c5fdbb36c8bf1708099379f01be3143fe6464637eb67d3799cb8fde3
* 0xbd81e01bd8f8e7530a23b6d41164e32745227481f4b35502237be9650d62f33f
* 0x7eebbc979ce623835fbb819bd608d5f4d85477505b04411cff06764079ada37c
* 0x7891b59db0e97092450d7c52e6b02a9201afdb35388bacf6aff47eeebafa8de6
* 0x76eaefb7f4a3a15cb950c01ae00b69f634d6f9ba8efadf6291b5c950adc78fdc
* 0x25d8ce2b707eb08614b57183d9272a6b387b076e639d5fb79ca056a59e59652e
* 0xb757f33493aee03196e0a609c0fd865f187dde9ef28ce5e30716d29da574d2d7
* 0x57a440ef266ca8c603fd583d742e0ab10033d15c81a5fa4fa5c4e71a6f093abd

## Token Transactions

* 0xe3211c9f155ab3622bf9e4dd0eada29255cec79aafc866d82504213b6554b1e9 (sold 2 tokens as a bundle)
* 0x1099207c44aa99ddc0ff17afedddfea432bc718e0633b4b970edfbc55063bff5
* 0x88b61b0e7af2b01e2e2794e8b7c6286097fad58175015f9ab16308ede66b54a3
* 0x080a0cf86ba30ff9c35409be254c5f17acc140ec689a1253353f9b8211b24dc8

