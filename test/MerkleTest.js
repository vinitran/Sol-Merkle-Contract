const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("MerkleTest", function () {
  let owner, otherAccount, merkleTest
  beforeEach(async function () {
    // Contracts are deployed using the first signer/account by default
    [owner, otherAccount] = await ethers.getSigners();

    const MkTest = await ethers.getContractFactory("MerkleTest");
    merkleTest = await MkTest.deploy();
  })

  describe("Check", function () {
    // it("check verify", async function () {
    //   const a =  await merkleTest.connect(owner).verify(
    //   "0x59d763c94605bce8b482272d5c04a5e8e76f768737e96121fcb8efc36b596893",
    //   [
    //     '0x86e13c2ea302581a8cbaa138a11f565bdfef1d9a89286bcede77a193b80d661c',
    //     '0x674ad9c7d0e1197b012384a8c70c8d9ba1ece0d66de7fd812a584507c85db852',
    //     '0x278183e27fde47b28bc6cdfecb1ca9bcf0bc0ede7f6a5d0b9be9ecd2c61e36d5'
    //   ],
    //   "0x1111111111111111111111111111111111111111", "5000000000000000000")
    //   console.log(a)
    //   });

      it("check Hash", async function () {
        const a =  await merkleTest.connect(owner).checkHash(
          "0x1111111111111111111111111111111111111111", 
          "5000000000000000000",
          "0xd970b931ba7866f64b09ba340a09c7beee1f20fe484743f6183bf21a4e700481"
        )
        console.log(a)
      });
  });

  
});
