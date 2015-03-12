//Esercizi-3 js

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
	for(var i = 1; i<=int; i++)
		array.push(randomInt(min,max));
	return array;
}

//Funzione che che estre un numero casuale compreso nell'intervallo (0,int] di base è [0,10]
function randomInt(min,max){
	 return Math.floor(Math.random()*(max-min+1)+min);;
}


//************************ Esercizio 011
//Implementazione ONE-LINE
function ex11(min,max){
	var ran = randomInt(min,max)+"";
	console.log("Estratto :"+ran);
	while(ran.length>1){
		var tot = 0;
		for (i in ran)
			tot += parseInt(ran[i]);
		ran = tot+"";
	}
	return tot;
}

//************************ TESTING
ex11(1000,9999);