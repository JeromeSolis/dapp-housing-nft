var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');
const truffleAssert = require('truffle-assertions');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const tokens = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new("Test Contract", "TCK", {from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(accounts[0], tokens[0], {from:account_one});
            await this.contract.mint(accounts[1], tokens[1], {from:account_one});
            await this.contract.mint(accounts[2], tokens[2], {from:account_one});
            await this.contract.mint(accounts[3], tokens[3], {from:account_one});
            await this.contract.mint(accounts[4], tokens[4], {from:account_one});
            await this.contract.mint(accounts[5], tokens[5], {from:account_one});
            await this.contract.mint(accounts[6], tokens[6], {from:account_one});
            await this.contract.mint(accounts[7], tokens[7], {from:account_one});
            await this.contract.mint(accounts[8], tokens[8], {from:account_one});
        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, tokens.length, "Total supply isn't equal to number of tokens");
        })

        it('should get token balance', async function () { 
            let balanceAccount = await this.contract.balanceOf(accounts[1]);;
            assert.equal(balanceAccount, 1, "Total balance of account should be 1");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI = await this.contract.tokenURI(tokens[0]);
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "Wrong token URI");
        })

        // https://kalis.me/check-events-solidity-smart-contract-test-truffle/
        it('should transfer token from one owner to another', async function () { 
            let tx = await this.contract.transferFrom(account_one, account_two, tokens[0]);
            truffleAssert.eventEmitted(tx, 'Transfer');
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new("Test Contract", "TCK", {from: account_one});
        })

        // https://kalis.me/assert-reverts-solidity-smart-contract-test-truffle/
        it('should fail when minting when address is not contract owner', async function () { 
            await truffleAssert.reverts(this.contract.mint(account_one, 10, {from: account_two}), "Requester isn't allowed")
        })

        it('should return contract owner', async function () { 
            let contractOwner = await this.contract.getOwner();
            assert.equal(contractOwner, account_one, "Incorrect owner address")
        })

    });
})