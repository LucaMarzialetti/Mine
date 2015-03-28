//Esercizi-3 js
//write a funciton that randomizes a number in range (0..100), 
//then prints all the odd numbers from 40 to that one. 
//If the number was smaller than 40, print all the numbers down to the randomized one (i.e. if the result was 37, you should print: 40, 39, 38, 37)


//************************ GENERAZIONE DELL'INPUT
//Funzione che che estre un numero casuale compreso nell'intervallo (0,int] di base è [0,10]
function randomInt(int){
	if(isNaN(int))
		int = 10;
	return parseInt(((Math.random()*int)+1+"").split(".")[0]);
}

function firstNatural(int){
	var i = int;
	var array = [];
	if(isNaN(int))
		i=0;
	while(i--)
		array.push(int-(i));
	return array;
}

function fromToNatural(int){
	var array = [];
	if(isNaN(int))
		int=0;
	while(int--)
		array.push(int+1);
	return array;
}


//************************ Esercizio 08
//Implementazione ONE-LINE
function ex8(){
	var ran = randomInt(100);
	console.log("Estratto: "+ran);
	if(ran>=40)
		return firstNatural(ran).filter(function(x){if(x%2!=0&&x>=40&&x<=ran) return x;});
	else 
		return fromToNatural(40).filter(function(x){if(x%2!=0&&x<=40&&x>=ran) return x;});
}

//************************ TESTING
ex8();