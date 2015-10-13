var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

var compare = function(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "The result is a tie!";
        userChoice = prompt("Please choose again");
    }
    else if (userChoice === "rock") {
        if (computerChoice === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }}
    else if (userChoice === "paper") {
        if (computerChoice === "rock"){
            return "paper wins";
        }
        else {
            return "scissors wins";
        }}
    else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "rock wins";
        }
        else {
            return "scissors wins";
        }}};

    console.log(compare(userChoice, computerChoice));
