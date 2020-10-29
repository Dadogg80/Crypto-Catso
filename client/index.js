var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x5DF1095c46541784faDB1853A7F238F6e1A29c56";

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
        instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]});
        user = accounts[0];

        console.log(instance);

        /** Creates an event listener for Birth event emitted by the Smart Contract*/
        instance.events.Birth().on('data', function(event){
            console.log(event);

            let owner = event.returnValues.owner;
            let newCatsoId = event.returnValues.newCatsoId;
            let mumId = event.returnValues.mumId;
            let dadId = event.returnValues.dadId;
            let genes = event.returnValues.genes;
            $("#catsoInfo").css("display", "block");
            $("#catsoInfo").text("Congratulations! \nYour new Catso is created!");
            $("#catsoCreation").css("display", "block");
            $("#catsoCreation").text(`Owner : ${owner} .\nCatsoId : ${newCatsoId} .\nMumId : ${mumId} .\nDadId : ${dadId} .\nGenes : ${genes} .`);
        })
        .on('error', console.error);
    
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