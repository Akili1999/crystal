$(document).ready(function() {


//crystals//
var crystalOne= Math.floor(Math.random() * 12) +1;
var crystalTwo= Math.floor(Math.random() * 12) +1;
var crystalThree= Math.floor(Math.random() * 12) +1;
var crystalFour= Math.floor(Math.random() * 12) +1;

//page text//
    $("#theScore").text(totalScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#random").text(random)



//Scores//
var wins= 0,
    losses= 0,
    totalScore= 0;


//Round number//
    var random= Math.floor(Math.random() * 120) +19;

//crystal functions//
function winner(){
    alert("You Win!");
    wins++;
    $("#wins").text(wins);
    random= Math.floor(Math.random() * 120) +19;
    totalScore=0;
    $("#theScore").text(totalScore);
    $("#random").text(random)
}
function loser(){
    alert("You Lost!");
    losses++;
    $("#losses").text(losses);
    random= Math.floor(Math.random() * 120) +19;
    totalScore=0;
    $("#theScore").text(totalScore);
    $("#random").text(random)
}

//crystal properties//
$("#c1").on("click", function(one) {
    console.log(crystalOne);
    totalScore+=crystalOne;
    console.log(totalScore);
    $("#theScore").text(totalScore);
    $("#random").text(random)
    if(totalScore === random){
        winner()
    }
    else if(totalScore > random){
        loser()
    }
})
$("#c2").on("click", function(two) {
    console.log(crystalTwo);
    totalScore+=crystalTwo;
    console.log(totalScore);
    $("#theScore").text(totalScore);
    $("#random").text(random)
    if(totalScore === random){
        winner()
    }
    else if(totalScore > random){
        loser()
    }
})
$("#c3").on("click", function(three) {
    console.log(crystalThree);
    totalScore+=crystalThree;
    console.log(totalScore);
    $("#theScore").text(totalScore);
    $("#random").text(random)
    if(totalScore === random){
        winner()
    }
    else if(totalScore > random){
        loser()
    }
})
$("#c4").on("click", function(four) {
    console.log(crystalFour);
    totalScore+=crystalFour;
    console.log(totalScore);
    $("#theScore").text(totalScore);
    $("#random").text(random)
    if(totalScore === random){
        winner()
    }
    else if(totalScore > random){
        loser()
    }
})
console.log(totalScore);
});