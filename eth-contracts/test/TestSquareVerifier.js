// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
// - use the contents from proof.json generated from zokrates steps
// Test verification with incorrect proof

var Verifier = artifacts.require("./Verifier");
const proof = require("../../zokrates/code/square/proof.json");

// Test verification with correct proof
contract('TestSquareVerifier', accounts => {

    describe('test with different proofs', function() {
        beforeEach(async function() {
            this.contract = await Verifier.new({from:accounts[0]});
        })

        it('should work with the correct proof', async function() {
            assert.equal(await this.contract.verifyTx(proof.proof, proof.inputs), true, "Proof should work");   
        })

        it('shouldn\'t work with an incorrect proof', async function() {
            let incorrectProof = proof;
            incorrectProof.proof.a = proof.proof.c;
            assert.equal(await this.contract.verifyTx(incorrectProof.proof, proof.inputs), false, "Proof shouln\'t work");
        })
    })
})


