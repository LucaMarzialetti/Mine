//Esercizi-3 js

//************************ GENERAZIONE DELL'INPUT
//Funzione che genera un array di dimensione n di interi casuali
function randomNatural(int, range){
	var array = [];
	if(isNaN(int))
		int=0;
	for(var i = 1; i<=int; i++)
		array.push(randomInt(range));
	return array;
}

//Funzione che che estre un numero casuale compreso nell'intervallo (0,int] di base è [0,10]
function randomInt(range){
	if(isNaN(range))
		range = 10;
	return parseInt(((Math.random()*range)+1+"").split(".")[0]);
}


//************************ Esercizio 02
//Implementazione ONE-LINE
function ex2(array){
		return array
					.filter(function(x){return x%2!=0;})
					.sort(function(x1,x2){return x1-x2;});
}

//Implementazione con funzioni
function ex2(array){
		return sortAscendent(
					oddOnly(
						array
					)
				);
}


//************************ METODI DI SUPPORTO PER L'IMPLEMENTAZIONE CHE SFRUTTA LE FUNZIONI
//Esercizio-02b: funzione che ritorna l'array filtrato con i numeri dispari
function oddOnly(array){
	var even = evenOnly(array);
	return array.filter(function(x){if(even.indexOf(x)===-1) return x;})
}

//Esercizio-02b2: funzione che ritorna l'array filtrato con i numeri pari
function evenOnly(array){
	return divisibleBy(array,2);
}

//Supporto: funzione che ritorna l'array filtrato in base al resto della divisione intera su "int"
function divisibleBy(array,int){
	if(! isNaN(int)){
		array = array.filter((function(x){return x%int===0;}));
		return array;
	}
}

//Esercizio-02c: funzione che esegue il sorting crescente
function sortAscendent(array){
	return array.sort(function(x1,x2){return x1-x2;});
}


//************************ TESTING
var n = 20;
var range = 100;
var array = randomNatural(n,range);
console.log("Ascend sort of "+n+" odd random numbers. ["+array+"] = "+ex2(array));