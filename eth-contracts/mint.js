const Web3 = require("web3");
const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require("fs");

const infuraKey = fs.readFileSync(".key").toString().trim();
const mnemonic = fs.readFileSync(".secret").toString().trim();
const contractAddress = "0xe5001F83556a1E93B7C5d38f576115e83B8D8362";
const ownerAddress = "0x098EdfFA5Adac9acCB66a6c110C4E3633C494A04";
const network = "ropsten";

const contractABI = JSON.parse(fs.readFileSync("./build/contracts/SolnSquareVerifier.json"));

const tokens = [981, 2849, 3640, 62515, 4173, 559, 88292, 821, 968,44734];
    // "981 Kennith Crossing, Apt. 980, G6V 1U5, Pierrebury, New Brunswick, Canada",
    // "2849 Padberg Overpass, Apt. 124, N9N 2U6, Hahnmouth, Northwest Territories, Canada",
    // "3640 Rogahn Dam, Suite 681, B3K 2A1, East Kenna, Alberta, Canada",
    // "62515 Enrique Pike, Apt. 966, K7D 6O9, Breanneville, New Brunswick, Canada",
    // "4173 Karelle Summit, Apt. 276, H5W 2O8, East Irma, Saskatchewan, Canada",
    // "559 Hunter Meadow, Suite 685, S6O 4L2, East Mateomouth, Nova Scotia, Canada",
    // "88292 Farrell Expressway, Suite 971, H4T 4X5, Briellemouth, New Brunswick, Canada",
    // "821 Prohaska Skyway, Suite 171, R9B 7D0, Marcelinoland, Prince Edward Island, Canada",
    // "968 Ellie Square, Apt. 147, X0O 5S0, North Jackie, Yukon, Canada",
    // "44734 Fadel Bypass, Suite 375, R7J 5D1, Port Bettebury, Manitoba, Canada"


const proof0 = require("../zokrates/code/square/proof_2_4.json");
const proof1 = require("../zokrates/code/square/proof_3_9.json");
const proof2 = require("../zokrates/code/square/proof_4_16.json");
const proof3 = require("../zokrates/code/square/proof_5_25.json");
const proof4 = require("../zokrates/code/square/proof_6_36.json");
const proof5 = require("../zokrates/code/square/proof_7_49.json");
const proof6 = require("../zokrates/code/square/proof_8_64.json");
const proof7 = require("../zokrates/code/square/proof_9_81.json");
const proof8 = require("../zokrates/code/square/proof_10_100.json");
const proof9 = require("../zokrates/code/square/proof_11_121.json");

async function main() {
    const provider = new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraKey}`);
    const web3 = new Web3(provider);
    const contract = new web3.eth.Contract(contractABI.abi, contractAddress, { gasLimit: "5500000" });
    
    const tx0 = await contract.methods.mintNFT(ownerAddress, tokens[0], proof0.proof, proof0.inputs).send({from:ownerAddress});
    console.log("Address Minted. Transaction: " + tx0.transactionHash);
    const tx1 = await contract.methods.mintNFT(ownerAddress, tokens[1], proof1.proof, proof1.inputs).send({from:ownerAddress});
    console.log("Address Minted. Transaction: " + tx1.transactionHash);
    const tx2 = await contract.methods.mintNFT(ownerAddress, tokens[2], proof2.proof, proof2.inputs).send({from:ownerAddress});
    console.log("Address Minted. Transaction: " + tx2.transactionHash);
    const tx3 = await contract.methods.mintNFT(ownerAddress, tokens[3], proof3.proof, proof3.inputs).send({from:ownerAddress});
    console.log("Address Minted. Transaction: " + tx3.transactionHash);
    const tx4 = await contract.methods.mintNFT(ownerAddress, tokens[4], proof4.proof, proof4.inputs).send({from:ownerAddress});
    console.log("Address Minted. Transaction: " + tx4.transactionHash);
    const tx5 = await contract.methods.mintNFT(ownerAddress, tokens[5], proof5.proof, proof5.inputs).send({from:ownerAddress});
    console.log("Address Minted. Transaction: " + tx5.transactionHash);
    const tx6 = await contract.methods.mintNFT(ownerAddress, tokens[6], proof6.proof, proof6.inputs).send({from:ownerAddress});
    console.log("Address Minted. Transaction: " + tx6.transactionHash);
    const tx7 = await contract.methods.mintNFT(ownerAddress, tokens[7], proof7.proof, proof7.inputs).send({from:ownerAddress});
    console.log("Address Minted. Transaction: " + tx7.transactionHash);
    const tx8 = await contract.methods.mintNFT(ownerAddress, tokens[8], proof8.proof, proof8.inputs).send({from:ownerAddress});
    console.log("Address Minted. Transaction: " + tx8.transactionHash);
    const tx9 = await contract.methods.mintNFT(ownerAddress, tokens[9], proof9.proof, proof9.inputs).send({from:ownerAddress});
    console.log("Address Minted. Transaction: " + tx9.transactionHash);
}

main();