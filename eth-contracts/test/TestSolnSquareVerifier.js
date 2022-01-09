var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier");
const truffleAssert = require('truffle-assertions');

const proof1 = require("../../zokrates/code/square/proof_4_16.json");
const proof2 = require("../../zokrates/code/square/proof_5_25.json");

contract('TestSolnSquareVerifier', accounts => {

    describe('Test Zokrates proof with mintable tokens', function() {
        beforeEach(async function() {
            this.contract = await SolnSquareVerifier.deployed();
        })
    
        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('should allow for a new solution to be added', async function() {
            let solutionKey = await this.contract.getSolutionKey(proof1.proof, proof1.inputs);
            let tx = await this.contract.addSolution(solutionKey, accounts[0]);
            truffleAssert.eventEmitted(tx, 'SolutionAdded');
        })
    
        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('should mint a new token', async function() {
            let tx = await this.contract.mintNFT(accounts[1], 0, proof2.proof, proof2.inputs);
            truffleAssert.eventEmitted(tx, 'Transfer');
        })
    })
})