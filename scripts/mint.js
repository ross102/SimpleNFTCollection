const NightJson = require("../artifacts/contracts/Night.sol/Night.json");
require("dotenv").config();
const { ethers } = require("ethers");

async function mintNFT() {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  console.log(wallet.address);
  const provider = ethers.getDefaultProvider("goerli", {
    etherscan: process.env.ETHERSCAN,
  });
  const signer = wallet.connect(provider);
  const Night = new ethers.Contract(
    "0x8c061bd4b5a4b87fFFE12A9f0694271cF5e40ff0",
    NightJson.abi,
    signer
  );
  const newItemId = await Night.mint(
    "https://ipfs.io/ipfs/QmYsxh2AZmo9HKU79KsjwQFDqeouRKfbVTKtZjvVZ5VJse"
  );

  console.log("NFT minted successfully : " + newItemId.hash);
}
mintNFT().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
