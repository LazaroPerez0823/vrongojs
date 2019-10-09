window.onload = function () {

// Asking the User their Name
// var name = prompt("What is you name?");
// Because I want to be annoying
// var pronoun = prompt("What is your prefered pronoun?")

//Just making sure it works
// console.log("Hello " + name);
// console.log("OK, I will refer to you as " + pronoun);


// It's Oct.  I was trying to think Halloween so I decided to go with famous witches.  I thought of looking up Salem witch trials.
// However I don't think anyone would know those names so I decided to go with famous movie/book witches.  Some of these are
// Probably Before you time, like the ones from Bewitched.  I went for using capital letters where needed becasue I hate names not written in proper grammar.

var words = [
  "professor minerva mcgonagall",
  "winifred sanderson",
  "hermione granger",
  "nancy downs",
  "bellatrix lestrange",
  "maleficent",
  "sabrina spellman",
  "luna lovegood",
  "molly weasley",
  "samanta stephens",
  "willow rosenburg",
  "marie laveau",
  "ginny weasley",
  "glinda",
  "scarlet witch",
  "morgan la fay",
  "melisandre",
  "baba yaga",
  "ursula",
  "the wicked witch of the west",
  "the blair witch"
];




console.log(words);

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var LettersGuessed = [];
var answerArray = [];

var winsText = document.getElementById("wins-text");
var losesText = document.getElementById("loses-text");
var lettersGuessedText = document.getElementById("lettersGuess-text");
var currentWordText = document.getElementById("currentWord-text");


  // This chooses the random word.  Who was the person that thought this up anyway?
  // Couldn't thy have just made a syntax for random whole number? Sheesh
var word = words[Math.floor(Math.random() * words.length)];
answerArray = word[Math.floor(Math.random() * words.length)];

console.log(word);
  // This is creating the array for the blank answer choices that the user will be given.
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
    if (word[i] == " ") {
        answerArray[i] = " ";
    } else {
        answerArray[i] = "_";
    }
}
  
console.log(answerArray)


document.onkeyup = function(event)

//   var userGuess = event.key;
// }


// while (remainingLetters > 0) {
//   document.onkeyup = function(event) {
//     var userLetter = event.key;
// Show the player their progress
// Take input from the player
// Update blankAnswers and remainingLetters for every correct guess
// Check to see if I should use a for








}