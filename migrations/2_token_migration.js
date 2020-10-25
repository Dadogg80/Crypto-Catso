const Token = artifacts.require("CatsoContract");

module.exports = function (deployer) {
  deployer.deploy(Token);
};
