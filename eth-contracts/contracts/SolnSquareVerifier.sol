pragma solidity >=0.4.21 <0.6.0;
pragma experimental ABIEncoderV2;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./Verifier.sol";
import "./ERC721MintableComplete.sol";

// contract Verifier {
//     function verifyTx(Proof memory proof, uint[2] memory input) public view returns (bool r);
// }

// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is ERC721MintableComplete {
    Verifier private verifier;

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint256 solutionIndex;
        address solutionAddress;
        bool minted;
    }

    // TODO define an array of the above struct
    // Solution[] private solution;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) solutions;
    uint256 solutionTotal = 0;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint256 newSolutionIndex, address newSolutionAddress);

    // TODO Create a function to add the solutions to the array and emit the event

    constructor(address verifierAddress, string memory name, string memory symbol) ERC721MintableComplete(name, symbol) public {
        verifier = Verifier(verifierAddress);
    }

    function getSolutionTotal() public view returns (uint256) {
        return solutionTotal;
    }

    function getSolutionKey(Verifier.Proof memory proof, uint[2] memory input) public view returns (bytes32) {
        bytes32 solutionKey = keccak256(abi.encodePacked(proof.a.X, proof.a.Y, proof.b.X, proof.b.Y, proof.c.X, proof.c.Y, input));
        return solutionKey;
    }

    function addSolution(bytes32 solutionKey, address solutionAddress) public {
        solutions[solutionKey].solutionIndex = solutionTotal;
        solutions[solutionKey].solutionAddress = solutionAddress;
        solutions[solutionKey].minted = false;

        emit SolutionAdded(solutions[solutionKey].solutionIndex, solutions[solutionKey].solutionAddress);
        solutionTotal++;
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mintNFT(address to, uint256 tokenId, Verifier.Proof memory proof, uint[2] memory input) public {
        bytes32 solutionKey = getSolutionKey(proof, input);
        require(solutions[solutionKey].minted == false, "Solution already used");
        require(verifier.verifyTx(proof, input), "Proof wasn't verified");

        if (solutions[solutionKey].solutionAddress == address(0x0)) {
            addSolution(solutionKey, msg.sender);
        }
        mint(to, tokenId);
        solutions[solutionKey].minted = true;
    }
}