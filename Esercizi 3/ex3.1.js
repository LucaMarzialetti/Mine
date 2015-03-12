//Esercizi-3 js


//************************ GENERAZIONE DELL'INPUT
//Funzione che ritorna l'array con i primi n numeri naturali
function firstNatural(int){
	var array = [];
	if(isNaN(int))
		int=0;
	for(var i = 1; i<=int; i++)
		array.push(i);
	return array;
}

//Funzione che ritorna l'array con i primi n numeri naturali (implementazione senza for)
function firstNatural(int){
	var i = int;
	var array = [];
	if(isNaN(int))
		i=0;
	while(i--)
		array.push(int-(i));
	return array;
}


//************************ Esercizio 01
//Implementazione ONE-LINE
function ex1(array){
		return array
					.filter(function(x){return x%2===0;})
					.map(function(x){return x*2;})
					.filter(function(x){return x%4===0;})
					.reduce(function(x,y){return x+y;});
}

//Implementazione con funzioni
function ex1(array){
		return sumAll(
			divisibleBy(
				multiplyBy(
					evenOnly(
						array
					),
				2),
			4)
		);
}


//************************ METODI DI SUPPORTO PER L'IMPLEMENTAZIONE CHE SFRUTTA LE FUNZIONI
//Esercizio-01b: funzione che ritorna l'array filtrato con i pari
function evenOnly(array){
	return divisibleBy(array,2);
}

//Esercizio-01b2: funzione che ritorna l'array filtrato con i dispari
function oddOnly(array){
	var even = evenOnly(array);
	return array.filter(function(x){if(even.indexOf(x)===-1) return x;})
}

//Esercizio-01c: funzione che ritorna l'array moltiplicato per "int"
function multiplyBy(array,int){
	if(! isNaN(int)){
		array = array.map((function(x){return x*int;}));
		return array;
	}
}

//Esercizio-01d: funzione che ritorna l'array filtrato in base al resto della divisione intera su "int"
function divisibleBy(array,int){
	if(! isNaN(int)){
		array = array.filter((function(x){return x%int===0;}));
		return array;
	}
}

//Esercizio-01e: funzione che ritorna la somma degli elementi dell'array
function sumAll(array){
	var tot =  array.reduce(function(pr,ne){return pr+ne;});
	return tot;
}


//************************ TESTING
var n = 20;
var array = firstNatural(n);
console.log("Sum of the first "+n+" natural and even numbers, doubled and multiplied by 4. ["+array+"] = "+ex1(array));