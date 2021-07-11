// artifacts unnique to truffle. Enables us to interact with smart contract
var Election = artifacts.require("./Election.sol");

module.exports = function(deployer) {
  deployer.deploy(Election);
};