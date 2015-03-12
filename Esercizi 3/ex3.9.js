//Esercizi-3 js

//************************ GENERAZIONE DELL'INPUT
//Funzione che che estre un numero casuale compreso nell'intervallo (0,int] di base è [0,10]
function randomInt(int){
	if(isNaN(int))
		int = 10;
	return parseInt(((Math.random()*int)+1+"").split(".")[0]);
}


//************************ Esercizio 09
//Implementazione ONE-LINE
function ex9(){
	var ran = randomInt(100);
	console.log("Estratto: "+ran);
	var array =  Array.apply(null, new Array(ran)).map(function(){return randomInt(100);});
	console.log(array);
	return array.sort(function(x1,x2){return x2-x1;})[0];
}

//************************ TESTING
ex9();