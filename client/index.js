var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x5DF1095c46541784faDB1853A7F238F6e1A29c56";

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
        user = accounts[0];

        console.log(instance);
    })
})


function createCatso(){
    let dnaStr = getDna(); 

    instance.methods.createCatsoGen0(dnaStr).send({}, function(error, txHash){
        if(error){
            console.warn(error);
        }
        else{
            console.log(txHash);
            console.log(`New Catso is created to user address ${user} .`);
            console.log(`Transaction Hash is: \ntxHash: ${txHash} .`);
        }
    })
}