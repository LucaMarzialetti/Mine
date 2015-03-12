//Esercizi-3 js

//************************ GENERAZIONE DELL'INPUT
//Funzione che che estre un numero casuale compreso nell'intervallo (0,int] di base è [0,10]
function randomNatural(min,max,int){
	var array = [];
	if(isNaN(int))
		int = 0;
	if(isNaN(max))
		max = 0;
	if(isNaN(min))
		min = 0;
	for(var i = 1; i <= int; i++)
		array.push(randomInt(min,max));
	return array;
}

//Funzione che che estre un numero casuale compreso nell'intervallo (0,int] di base è [0,10]
function randomInt(min,max){
	 return Math.floor(Math.random()*(max-min+1)+min);;
}


//************************ Esercizio 013
//Implementazione ONE-LINE
function ex13(min,max){
	var rand1 = randomInt(min,max);
	var rand2 = randomInt(min,max);
	console.log("Estratto "+rand1+", "+rand2);
	return stdDev(rand1,rand2);
}

//Funzione che calcola il GCD di due numeri
function stdDev(a,b){
	var dev = 1;
	return dev;
}
//************************ TESTING
ex13(1,100);