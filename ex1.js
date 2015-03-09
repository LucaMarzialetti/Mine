//Esercizi js
//Esercizio01: Matrice 10*10 contenente la tabellina del 10
console.log("Exercise01\n");
var riga = "";

for(i=1;i<=10;i++){
	for(y=1;y<=10;y++)
		riga+=i*y+"\t";
	console.log(riga);
	riga="";
}
console.log();

//Esercizio02: Matrice 10*10 contenente la tabellina del 10 con ogni colonna separata da virgole (esclusa l'ultima)
console.log("\nExercise02\n");
riga = "";
for(i=1;i<=10;i++){
	for(y=1;y<=10;y++)
		riga+=i*y+",\t";
	riga=riga.substring(0,riga.length-2);
	console.log(riga);
	riga="";
}
console.log();

//Esercizio03: Matrice 10*10 contenente la matrice identità con ogni colonna separata da virgole (esclusa l'ultima)
console.log("\nExercise03");
riga = "";
for(i=1;i<=10;i++){
	for(y=1;y<=10;y++)
		(i===y) ? riga+=1+",\t" : riga+=0+",\t";
	riga=riga.substring(0,riga.length-2);
	console.log(riga);
	riga="";
}