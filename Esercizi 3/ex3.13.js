//Esercizi-3 js
//write a funciton that randomizes two numbers and prints their least common multiplication of them. (use lcm for details)

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
	var gcd = gcdCalc(rand1,rand2);
	return (rand1*rand2)/gcd;
}

//Funzione che calcola il GCD di due numeri
function gcdCalc(a,b){
	var d = 1;
	var currentD = d;
	while( (d <= a) && (d <= b) ){
		if(a%d==0 && b%d==0){
			currentD=d;
		}	
		d++;
	}
	return currentD;
}

//************************ TESTING
ex13(1,100);