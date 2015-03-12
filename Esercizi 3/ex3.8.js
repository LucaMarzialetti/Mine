//Esercizi-3 js

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