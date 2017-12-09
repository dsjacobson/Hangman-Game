/*
var wins = 0;
var guessesRemaining = 8;

var currentWord = ["wrigley", "dimaggio", "fenway", "williams", "mantle", "feller", "koufax",
 "dodgers", "yankees"]


//Letters guessed by user
var userGuess = document.getElementById("letters-guessed");


document.onkeyup = function(event) {

	      // Determines which key was pressed.
	      userGuess.textContent = event.key;
	      


	      //randomly choose a word from the array
	     var liveWord = currentWord[Math.floor(Math.random() * currentWord.length)];

	  	
	     var html =
	     	"<p>" + liveWord + "<p>";

	     document.querySelector("#current-word").innerHTML = html;


	  	var letterCount = liveWord.split("", );

	  	console.log(letterCount);
	  	


	  var dashedWord = document.getElementById("dashed-word");

		  	for (var i = 0; i < letterCount.length; i++) {
		  		
		  		var newDashedWord = document.createElement("span");	

		  		newDashedWord.innerHTML = letterCount[i];
		  		
		  		dashedWord.appendChild(newDashedWord);

		  	}
		 var newLetterCount = letterCount.length;
		 console.log(newLetterCount);

		 //create underlined "blanks" for the number of letters in the given array

		 var repeatedCharacter = "_ ".repeat(letterCount.length);

		 document.querySelector("#dashed-word-2").innerHTML = repeatedCharacter;

		document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
		 

		 //Show list of letters guessed that are not in the currentWord

		 console.log(event.key);
		 if (event.key !== letterCount[i]) {
		 	
		 	guessesRemaining--;
		 
		 }

		 if (guessesRemaining < 0) {
		 	
		 	document.querySelector(".right-div").innerHTML = "Game Over";
		 }


		 //give letter value to each "_" based on currentWord

		 //Increase wins if all letters in word guessed before guesses remaining is === 0

		 if(letterCount.indexOf(userGuess) === event.key) {
		 	alert("Correct Guess")
		 } 

  	}


  	



  	 for (var i = 0; i < liveWord; i++) {
  		console.log()
  	} */


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
 var winCount = 0;
 var lossCount = 0;
 var guessesLeft = 9;


console.log(winCount);

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
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;

	//Testing /debugging
	console.log(selectedWord);
	console.log(lettersInWord);


}

function checkLetters(letter) {

	
	var isLetterInWord = false;

	for (var i=0; i<numBlanks; i++){
		if(selectedWord[i] == letter) {
			isLetterInWord = true;
		}
	}

	//Check where in word letter exists and populate

	if(isLetterInWord) {
		for (var i=0; i<numBlanks; i++) {
			if(selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
			}
		}
	}

		else {
			wrongLetters.push(letter);
			guessesLeft--
		}
	
	console.log(blanksAndSuccesses);
	
}

function roundComplete() {
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + guessesLeft);

	//Update the HTML to reflect the most recent count stats
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

	// Check if User won
	if(lettersInWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		alert("You Won!");

		//Update the win counter in the HTML
		document.getElementById("winCounter").innerHTML = winCount;
		
		startGame();
	}

	else if (guessesLeft == 0) {
		lossCount++;
		alert("You Lost!");

		document.getElementById("lossCounter").innerHTML = lossCount;

		startGame();

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
	roundComplete();

	console.log(letterGuessed);
}

