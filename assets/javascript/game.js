// Asking the User their Name
var name = prompt("What is you name?");
// Because I want to be annoying
var pronoun = prompt("What is your prefered pronoun?")

//Just making sure it works
console.log("Hello " + name);
console.log("OK, I will refer to you as " + pronoun);


// It's Oct.  I was trying to think Halloween so I decided to go with famous witches.  I thought of looking up Salem witch trials.
// However I don't think anyone would know those names so I decided to go with famous movie/book witches.  Some of these are
// Probably Before you time, like the ones from Bewitched.  I went for using capital letters where needed becasue I hate names not written in proper grammar.

var witches= [
  "Professor Minerva McGonagall",
  "Winifred Sanderson",
  "Hermione Granger",
  "Nancy Downs",
  "Bellatrix Lestrange",
  "Maleficent",
  "Sabrina Spellman",
  "Luna Lovegood",
  "Molly Weasley",
  "Samanta Stephens",
  "Willow Rosenburg",
  "Marie Laveau",
  "Ginny Weasley",
  "Glinda",
  "Scarlet Witch",
  "Morgan La Fay",
  "Melisandre",
  "Baba Yaga",
  "Ursula",
  "The Wicked Witch of the West"
]


// This chooses the random word.  Who was the person that thought this up anyway?
// Couldn't thy have just made a syntax for random whole number? Sheesh

var word = witches[Math.floor(Math.random() * witches.length)];


// This is creating the array for the blank answer choices that the user will be given.
var blankAnswers = [];
for (var i = 0; 1 < word.length; i ++) {
  blankAnswers[i] = "_";
}

var remainingLetters = word.length;

while (remianingLetters > 0) {
// Game Code goes here
// Show the player their progress
// Take input from the player
// Update blankAnswers and remainingLetters for every correct guess
// Check to see if I should use a for loop
}


