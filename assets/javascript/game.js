// variables
  var letterAnswers = ["i", "a", "m", "s", "n", "e", "a", "k", "y"];
  var letterPick = " ";
  var userChoice;
  var numGuess = 9;
  var missGuess = [];
  var wins = 0;
  var losses = 0;
  var inputFound;
  var inputKey;

// computer randomly picks letter - works

   	 function pickLetter(){
  	 	letterPick = letterAnswers[Math.floor(Math.random() * letterAnswers.length)];
  	 	console.log(letterPick)
    	}

//      

//result from player picked letter compared to computer picked letter
  	function charPick() {

//if player letter and computer letter match      
		inputFound = false;
			for (var i = 0; i < letterAnswers.length; i++) {
	 		 if (inputKey	=== letterPick) {
	  		userChoice[i] === inputKey;
	  		inputFound = true;
        console.log(userChoice)
      }
	   }
    
// player letter and computer letter don't match
		if (inputFound === false) {
	  		if (missGuess.indexOf(inputKey) === -1) {
	    	missGuess.push(inputKey);
	      $("#guessesSoFar").html("<h3>Guesses so far: </h3>" + missGuess);
      }
	   }
    }

//score keeping
  	function winLoseCheck(){
// matched letters win score goes up
  		if (userChoice === pickLetter){
  		wins++;
  		  }
// letters don't match losses score goes up
  		else {
  		losses++;
// guesses left goes down
  		guessesLeft--;
  		}
    }   		

//if then goes back to winLoseCheck
      winLoseCheck();      
  		  
//load letter choices
  function showLetters(){
    letterDisplay = "";
    for (var i = 0; i < letterAnswers.length; i++) {
      letterDisplay = letterDisplay + " " + userChoice[i];
      }
  }   

// game starts by player picking a letter - works
    (document).onkeyup = function(event) {
	   inputKey = String.fromCharCode(event.keyCode).toLowerCase();  	
      console.log(inputKey)
    }
//computer picks a letter to see if matched      
      pickLetter();
      charPick();
   





