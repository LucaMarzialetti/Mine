//Esercizi-3 js

//************************ GENERAZIONE DELL'INPUT
//Funzione che che estre un numero casuale compreso nell'intervallo (0,int] di base è [0,10]
function randomInt(int){
	if(isNaN(int))
		int = 10;
	return parseInt(((Math.random()*int)+1+"").split(".")[0]);
}


//************************ Esercizio 05
//Implementazione ONE-LINE
function ex5(int){
	var array = [];
	while(int--){
		array.push(randomInt(100));
	}
	console.log("Estratti ["+array+"]");
	return array.sort(function(x1,x2){return x1-x2;}).pop();
}


//************************ TESTING
ex5(3);