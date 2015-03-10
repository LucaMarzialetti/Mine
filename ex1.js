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

//Esercizio-02: Matrice 10*10 contenente la tabellina del 10 con ogni colonna separata da virgole (esclusa l'ultima)
console.log("Exercise 02");
riga = "";
for(var i=1; i<=10; i++){
	for(var j=1; j<=10; j++)
		riga+=i*j+",\t";
	riga=riga.substring(0,riga.length-2);
	console.log(riga);
	riga="";
}
console.log("");

//Esercizio-03: Matrice 10*10 contenente la matrice identità con ogni colonna separata da virgole (esclusa l'ultima)
console.log("Exercise 03");
riga = "";
for(var i=0; i<10; i++){
	for(var j=0; j<10; j++)
		(i===j) ? riga+=1+",\t" : riga+=0+",\t";
	riga=riga.substring(0,riga.length-2);
	console.log(riga);
	riga="";
}