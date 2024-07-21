const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// Delete the entire build folder
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

// Read the contract file
const lotteryPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(lotteryPath, "utf8");
const output = solc.compile(source, 1).contracts;

// Create the build folder
fs.ensureDirSync(buildPath);

// Write the output to the build folder
for (const contract in output) {
  fs.outputJsonSync(path.resolve(buildPath, contract.replace(":", "") + ".json"), output[contract]);
}
