// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Night = await hre.ethers.getContractFactory("Night");
  const night = await Night.deploy("Night", "NGT");

  await night.deployed();

  console.log(`Night token deployed to ${night.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
// 0xF066c9545bfE2268e9d3f8498d5268e2204bc9eE
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
