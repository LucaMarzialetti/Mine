//Esercizi-3 js

//************************ GENERAZIONE DELL'INPUT
//Funzione che che estre un numero casuale compreso nell'intervallo (0,int] di base è [0,10]
function randomNatural(min,max,int){
	var array = [];
	if(isNaN(int))
		int = 0;
	if(isNaN(max))
		max = 0;
	if(isNaN(min))
		min = 0;
	for(var i = 1; i <= int; i++)
		array.push(randomInt(min,max));
	return array;
}

//Funzione che che estre un numero casuale compreso nell'intervallo (0,int] di base è [0,10]
function randomInt(min,max){
	 return Math.floor(Math.random()*(max-min+1)+min);;
}


//************************ Esercizio 012
//Implementazione ONE-LINE
function ex12(min,max){
	var rand1 = randomInt(min,max);
	var rand2 = randomInt(min,max);
	console.log("Estratto "+rand1+", "+rand2);
	var d = 1;
	var find = false;
	while( !find && (d <= rand1) && (d <= rand2) ){
		if(d > 1 && rand1%d==0 && rand2%d==0){
			find = true;
		}	
		if(!find)
			d++;
	}
	if (find)
		return d;
}

//************************ TESTING
ex12(0,100);