//Esercizi-3 js
//write a funciton that randomizes a number in range (1000..9999) and calculate the sum of its digits. 
//For instance, if the randomized number was 1049, program should print 14


//************************ GENERAZIONE DELL'INPUT
//Funzione che che estre un numero casuale compreso nell'intervallo (0,int] di base è [0,10]
function randomNatural(min,max,int){
	var array = [];
	if(isNaN(int))
		int=0;
	if(isNaN(max))
		max=0;
	if(isNaN(min))
		min=0;
	while(int--)
		array.push(randomInt(min,max));
	return array;
}

//Funzione che che estre un numero casuale compreso nell'intervallo (0,int] di base è [0,10]
function randomInt(min,max){
	 return Math.floor(Math.random()*(max-min+1)+min);;
}


//************************ Esercizio 010
//Implementazione ONE-LINE
function ex10(min,max){
	var ran = randomInt(min,max)+"";
	var tot = 0;
	console.log("Estratto :"+ran);
	for (i in ran)
		tot += parseInt(ran[i]);
	return tot;
}

//************************ TESTING
ex10(1000,9999);