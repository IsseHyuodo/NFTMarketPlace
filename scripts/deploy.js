const hre=require("hardhat");

async function main(){
  const _nftMarketContract=await ethers.getContractFactory("NFTMarket");
  const NFTMarket=await _nftMarketContract.deploy();
  // No such need of this await NFTMarket.deployed();


  console.log("nft market deployed to:",NFTMarket.address);

  const _nftContract=await ethers.getContractFactory("NFT");
  const NFT=await _nftContract.deploy(NFTMarket.address);

  console.log("nft deployed to:",NFT.address);


}
main().catch((error)=>{
  console.error(error);
  process.exitcode=1;
}

)