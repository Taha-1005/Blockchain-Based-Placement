require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.7",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contract",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
