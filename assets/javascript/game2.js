//Global Variables
//==========================================

// Arrays and Variables for holding data

var wordOptions = ["wrigley", "dimaggio", "fenway", "williams", "mantle", "feller", "koufax",
 "dodgers", "yankees"];

 var selectedWord = "";
 var lettersInWord = [];
 var numBlanks = 0;
 var blanksAndSuccesses = []; // w _ _ _ _ _ _
 var wrongLetters = [];

 //Game Counters
 var WinCount = 0;
 var lossCount = 0;
 var guessesLeft = 9;


console.log(WinCount);

// FUNCTIONS (Reusable blocks of code)
//==========================================

function startGame () {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersInWord = selectedWord.split("");
	numBlanks = lettersInWord.length;

	//Reset
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSuccesses = [];

	// Populate blanks and successes with right blanks
	for (var i=0; i<numBlanks; i++){
		blanksAndSuccesses.push("_");
	}

	// Change HTML to reflect round conditions

	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = WinCount;
	document.getElementById("lossCounter").innerHTML = lossCount;

	//Testing /debugging
	console.log(selectedWord);
	console.log(lettersInWord);


}

function checkLetters(letter) {

	alert(letter);
	var isLetterInWord = false;

	for (var i=0; i<numBlanks; i++){
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
			alert("Letter Found");
		}
	}

	//Check where in word letter exists and populate


	for (var i=0; i<numBlanks; i++) {
		if(selectedWord[i] == letter) {
			blanksAndSuccesses[i] = letter;
		}

		else {
			wrongLetters.push(letter);
			numGuesses--
		}
	}
}


// MAIN PROCESS
//==========================================

// Initiates the code the first time
startGame();

// Register keyclicks

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);

	console.log(letterGuessed);
}
