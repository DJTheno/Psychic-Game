var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerChoice = [];

var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoices);

document.onkeypress = fuction(event) ;
    var userGuess = event.key;


if(userGuess === computerChoice){
    wins++;
}
else{
    guesses--;
}

if(guesses === 0){
    losses++
}

    document.getElementById("wins").innerHTML = "wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "guessesLeft: " + guessesLeft;
    document.getElementById("Guesses").innerHTML = "Guesses:" + Guesses 

