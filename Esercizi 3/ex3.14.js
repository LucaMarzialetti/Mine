//Esercizi-3 js
//write a funciton that randomizes two numbers and prints their average and standard deviation

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
	while(int--)
		array.push(randomInt(min,max));
	return array;
}

//Funzione che che estre un numero casuale compreso nell'intervallo (0,int] di base è [0,10]
function randomInt(min,max){
	 return Math.floor(Math.random()*(max-min+1)+min);;
}


//************************ Esercizio 014
//Implementazione ONE-LINE
function ex14(min,max){
	var samples = [];
	samples.push(randomInt(min,max));
	samples.push(randomInt(min,max));
	console.log("Estratti("+samples.length+"): "+samples);
	return stdDev(samples);
}

//Funzione che calcola il GCD di due numeri
function stdDev(samples){
	var averageN = average(samples);
	var sum = samples.reduce(function(x){return Math.pow((x-averageN),2)})
	return Math.sqrt(sum/samples.length);
}

function average(samples){
	return samples.reduce(function(x,y){return x+y;})/samples.length;
}
//************************ TESTING
ex14(1,100);