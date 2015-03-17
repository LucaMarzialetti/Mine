//Esercizi-4 js

//implement the following Bingo object. 
//The Bingo object should randomize a number between 1 and 10 on creation and provide a single method guess(number). 
//That method should return true if the argument was the secret number. Test your class.

function Bingo(){
	this.secret = this.randomize();
}

Bingo.prototype.guess = function(number){return number===this.secret;};
Bingo.prototype.randomize = function(){return parseInt(((Math.random()*10)+1+"").split(".")[0]);};