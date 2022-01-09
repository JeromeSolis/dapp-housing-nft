// migrating the appropriate contracts
var Verifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
// var ERC721MintableComplete = artifacts.require("./ERC721MintableComplete.sol")

module.exports = async function(deployer) {
  await deployer.deploy(Verifier);
  await deployer.deploy(SolnSquareVerifier, Verifier.address, "Housing Marketplace", "LOT");
  // await deployer.deploy(ERC721MintableComplete, "Test Contract", "TCK");
};
