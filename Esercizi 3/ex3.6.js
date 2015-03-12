//Esercizi-3 js

//************************ GENERAZIONE DELL'INPUT
//Funzione che che estre un numero casuale compreso nell'intervallo (0,int] di base è [0,10]
function randomInt(int){
	if(isNaN(int))
		int = 10;
	return parseInt(((Math.random()*int)+1+"").split(".")[0]);
}

//************************ Esercizio 06
//Implementazione ONE-LINE
function ex6(){
	var ran = randomInt(100);
	var size = parseInt(ran/2)+1;
	console.log("Valore randomizzato: "+ran+", Numeri pari: "+size);
	return Array.apply(null, new Array(size)).map(function(){return 0;}).map(function(x,i){return i*2;});
}


//************************ TESTING
ex6();