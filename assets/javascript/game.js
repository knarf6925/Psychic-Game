var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


var updateGuessesLeft = function() {
  // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updatelettertoguess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];

};

var updateGuessessofar = function () {
    document.querySelector('#let').innerHTML = "Your guesses so far:" + guessedLetters.join(', ');

};

var reset = function () {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLettertoGuess();
    updateGuessesLeft();
    updateGuessessofar();
    
}


document.onkeyup = function(event) {



var userGuess = event.key;



}


