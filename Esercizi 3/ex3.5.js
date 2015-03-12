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
function ex5(){
	var array = [0,0,0];
	array = array.map(function(){return randomInt(100);}).sort(function(x1,x2){return x2-x1;});
	console.log("Estratti ["+array+"]");
	return array[0];
}


//************************ TESTING
ex5();