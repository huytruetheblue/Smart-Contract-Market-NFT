import { ethers, hardhatArguments } from "hardhat";
import * as Config from "./config";

async function main() {
  await Config.initConfig();
  const network = hardhatArguments.network ? hardhatArguments.network : "dev";
  const [deployer] = await ethers.getSigners();
  console.log("deploy from address: ", deployer.address);

  // const Floppy = await ethers.getContractFactory("Floppy");
  // const floppy = await Floppy.deploy();
  // console.log("Floppy address: ", floppy.address);
  // Config.setConfig(network + ".Floppy", floppy.address);

  // const Vault = await ethers.getContractFactory("Vault");
  // const vault = await Vault.deploy();
  // console.log("Vault address: ", vault.address);
  // Config.setConfig(network + ".Vault", vault.address);

  // const USDT = await ethers.getContractFactory("USDT");
  // const usdt = await USDT.deploy();
  // console.log("USDT address: ", usdt.address);
  // Config.setConfig(network + ".USDT", usdt.address);

  // const Ico = await ethers.getContractFactory("FLPCrowdSale");
  // const ico = await Ico.deploy(
  //   10000,
  //   1000,
  //   "0xF8245050365E42C6FEc0c24539BA4E45675D8FE0",
  //   "0xA6b82D39F57aBdDfc1eEB7F921195307B4203aCB"
  // );
  // console.log("ICO address: ", ico.address);
  // Config.setConfig(network + ".ico", ico.address);

  // const Hero = await ethers.getContractFactory("Hero");
  // const hero = await Hero.deploy();
  // console.log("stman hero address: ", hero.address);
  // Config.setConfig(network + ".Hero", hero.address);

  // const MKP = await ethers.getContractFactory("HeroMarketplace");
  // const heroMarketplace = await MKP.deploy(
  //   "0x988772ABa4CCdA035Ed0b6b06A90cD1D655FF116",
  //   "0xA6b82D39F57aBdDfc1eEB7F921195307B4203aCB"
  // );
  // console.log("Market deployed at: ", heroMarketplace.address);
  // Config.setConfig(network + ".HeroMarketplace", heroMarketplace.address);

  const Auction = await ethers.getContractFactory("Auction");
  const auction = await Auction.deploy(
    "0xA6b82D39F57aBdDfc1eEB7F921195307B4203aCB",
    "0x988772ABa4CCdA035Ed0b6b06A90cD1D655FF116"
  );
  console.log("Market deployed at: ", auction.address);
  Config.setConfig(network + ".Auction", auction.address);

  await Config.updateConfig();
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
