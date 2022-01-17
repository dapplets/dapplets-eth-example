// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");
const hre = require("hardhat");
const Artifact = require("../artifacts/contracts/Tutorial.sol/Tutorial.json");
//const Artifact = require("../artifacts/contracts/TutorialV2.sol/Tutorial2.json");

const test = '{"text":"Какой-то текст","mal":"dsadas"}';
const test2 = '{"id":"1480614024626716681","text":"Announcing Honduras CLR Grants! This is something that the \n@EthereumTGU\n community has been working for months with the \n@clrfund\n team to make it happen","authorFullname":"crisgarner.eth ","authorUsername":"crisgarner","authorImg":"https://pbs.twimg.com/profile_images/1478799687280910341/XzPI-_Qj_normal.jpg","theme":"LIGHT","parent":null}';

async function main() {
	const [account] = await ethers.getSigners();
	const contractAddress = "";
	const contract = new ethers.Contract(contractAddress, Artifact.abi, account);

	// addTweets
	//await contract.addTweet('1111111111111111');
	//await contract.addTweet("2222222222222222");
	//await contract.addTweet(test2);

	// removeTweet
	//await contract.removeTweet(test2);
	await contract.removeTweet("2222222222222222");
	//await contract.removeTweet("3333333333333333");
	//await contract.removeTweet("4444444444444444");

	// getTweets
	const result = await contract.getTweets(account.address);
	console.log(result);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
