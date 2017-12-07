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


  	



  	//for (var i = 0; i < liveWord; i++) {
  	//	console.log()
  	//}



