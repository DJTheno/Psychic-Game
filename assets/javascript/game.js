//this is an array declaration//
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
//computer random selection//
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)]; 

console.log(computerChoice);
//makes everything happen when key is pressed//


document.onkeypress = function (event) {
    var lettersGuessed = event.key;

    //if else statements telling what happens when keys are pressed//
    if (lettersGuessed === computerChoice) {
        wins++;
    }
    else {
        guessesLeft--;
    }

    if (lettersGuessed === 0) {
        losses++
    }
    //this is the return of the html to my page//
    document.getElementById("wins").innerHTML = "wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "guessesLeft: " + guessesLeft;
    document.getElementById("lettersGuessed").innerHTML = "lettersGuessed:" + lettersGuessed;
    document.getElementById("computerChoices").innerHTML = "computerChoices:" + computerChoice;
}
