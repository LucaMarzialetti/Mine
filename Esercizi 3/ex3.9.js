//Esercizi-3 js
//write a funciton that randomizes a number n in range 0..100. 
//Now randomizes n more numbers in that range, printing the largest of them


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
	var max = Number.MIN_VALUE;
	var temp;
	var array = [];
	while(ran--){
		temp = randomInt(100);
		if(temp > max)
			max = temp;
		array.push(temp);
	}
	console.log("Estratti: "+array);
	return max;
}

//************************ TESTING
ex9();