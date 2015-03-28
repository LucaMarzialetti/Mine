//Esercizi-1 js
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