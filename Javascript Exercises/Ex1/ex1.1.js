//Esercizi-1 js
//Esercizio-01: Matrice 10*10 contenente la tabellina del 10
console.log("Exercise 01");
var riga = "";

for(var i=1; i<=10; i++){
	for(var j=1; j<=10; j++)
		riga+=i*j+"\t";
	console.log(riga);
	riga="";
}
console.log("");