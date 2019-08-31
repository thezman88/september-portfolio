// answer
var answer = ['ruth', 'mantel', 'dimaggio', 'jeter', 'rivera','judge','williams','posada','berra','gehrig'];
// the word guessed as string
var theWord = "";
// array to hold letters in theWord
var theWordLtrs = [];
// number of _ in theWord
var underScores = 0;
// array to store displayed answer
var answerDisplay = [];
// array for wrong guesses displayed
var wrongLtrs = [];

// game counters
var wins = 0;
var losses = 0;
var guessesRemain = 9;

// game function

// start Game
function newGame() {
  // computers answer from answer
  theWord = answer[Math.floor(Math.random() * answer.length)];
  console.log(theWord);
  // grab theWord and split it up to each letter
  theWordLtrs = theWord.split("");
  console.log(theWordLtrs);
  // get number of letters from the word
  underScores = theWordLtrs.length;
  console.log(underScores);

  // game reset variables
  guessesRemain = 9;
  wrongLtrs = [];
  answerDisplay = [];

  // reset images
  if (guessesRemain = 9) {
    document.getElementById('homerunImg').removeAttribute('style');
    document.getElementById('playerImg').removeAttribute('style');
    document.getElementById('hotDogImg').removeAttribute('style');
    document.getElementById('batGloveImg').removeAttribute('style');
    document.getElementById('gloveImg').removeAttribute('style');
    document.getElementById('stadiumImg').removeAttribute('style');
    document.getElementById('baseballImg').removeAttribute('style');
    document.getElementById('batBallImg').removeAttribute('style');
  }

  // underscores for blank letters
  for (i = 0; i < underScores; i++) {
    answerDisplay.push("_");
    console.log(answerDisplay);
  }
  // update html
  document.getElementById('currentWord').innerHTML = answerDisplay.join(" ");
  document.getElementById('remainingGuesses').innerHTML = "Guesses Remaining:" + guessesRemain;
  document.getElementById('wins').innerHTML = "Wins:" + " " + wins;
  document.getElementById('losses').innerHTML = "Losses:" + "" + losses;

}
function checkLtrs(letter) {

  //Check if the letter pressed is an actual letter
  if (event.keyCode >= 65 && event.keyCode <= 90) { //If the letter pressed IS part of the alphabet, then run the comparison:

        //Check if the letter guessed is one of the letters in the word
        var correctLetter = false;

        for ( var i = 0; i < underScores; i++) {
          if(theWord[i] == letter) {
            correctLetter = true;
          }
        }

        //Check where the correct letter is located on the word, then add to html
        if(correctLetter) {
          for ( var i = 0; i < underScores; i++) {
            if(theWord[i] == letter) {
              answerDisplay[i] = letter;
            }
          }
        }

        //If the letter isn't part of the word
        else {
          wrongLtrs.push(letter);
        guessesRemain--
        }

        //testing via console
        console.log(answerDisplay);

  } else { //If user input is not a letter from the alphabet
    // Alert the user
    alert("Only letters from the Alphabet");
  }
}
function roundComplete() {
		console.log("Win count: " + wins +  " | Loss Count: " + losses + " | Guesses Left: " + guessesRemain)

		//Update HTML with Game Stats
		document.getElementById("remainingGuesses").innerHTML = "Guesses Remaining: " + " " + guessesRemain;
		document.getElementById("currentWord").innerHTML = answerDisplay.join(" ");
		document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed:" + " " + wrongLtrs.join(" ");


		//Check if the user won
		if (theWordLtrs.toString() == answerDisplay.toString()) {
			wins++;
			alert("Theeeee Yankees Win! You got " + theWord + " Try another round?");
			console.log("YOU WIN!");

			document.getElementById("wins").innerHTML = "Wins: " + " " + wins;

			//Start New Game
			newGame();
			document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed:" + " " + " ";

		} else if (guessesRemain == 0) { //Check if user lost
			losses++;
			alert("You have 0 guesses left,Your Out!. The word was '" + theWord + "'. Do you want to try again?")
			console.log("You Lost!");

			//  wins in the HTML
			document.getElementById("losses").innerHTML = "Losses: " + " " + losses;

			//Start New Game
			newGame();
			document.getElementById("lettersGuessed").innerHTML = "Letters Already Guessed:" + " " + " ";

		}
	}



	//start the game
	newGame();

	// what keys are being pressed
	document.onkeyup = function(event) {
		//Create a variable to hold all the letters that have been guessed
		var ltrsGuessed = String.fromCharCode(event.keyCode).toLowerCase();
			console.log("You Guessed the letter: " + ltrsGuessed); // Testing via Console.Log

		//Run the check letters function
		checkLtrs(ltrsGuessed);
		roundComplete();

		//Guesses left images
		if (guessesRemain <= 8) {
			document.getElementById("homerunImg").style.opacity = "0.25";
		}

		if (guessesRemain <= 7) {
			document.getElementById("playerImg").style.opacity = "0.25";
		}

		if (guessesRemain <= 6) {
			document.getElementById("hotDogImg").style.opacity = "0.25";
		}

		if (guessesRemain <= 5) {
			document.getElementById("batGloveImg").style.opacity = "0.25";
		}

		if (guessesRemain <= 4) {
			document.getElementById("gloveImg").style.opacity = "0.25";
		}

		if (guessesRemain <= 3) {
			document.getElementById("stadiumImg").style.opacity = "0.25";
		}

		if (guessesRemain <= 2) {
			document.getElementById("baseballImg").style.opacity = "0.25";
		}

		if (guessesRemain <= 1) {
			document.getElementById("batBallImg").style.opacity = "0.25";
		}

	}


  var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

function pauseAudio() {
  x.pause();

}
