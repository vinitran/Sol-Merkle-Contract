// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

contract MerkleTest {
    constructor() {    }

    function verify(
        bytes32 root,
        bytes32[] memory proof,
        address addr,
        uint256 amount
    ) public pure returns (bool) {
        // (2)
        bytes32 leaf = keccak256(abi.encodePacked(addr, amount));
        // (3)
        require(MerkleProof.verify(proof, root, leaf), "Invalid proof");
        return true;
    }

    function checkHash( address addr, uint256 amount, bytes32 leaf) public pure  returns (bool) {
        if (leaf == keccak256(abi.encodePacked(addr, amount))) {
            return true;
        }

        return false;
    }
}