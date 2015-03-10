//Esercizi-2 js
//Esercizio-01: Comprensione del codice
console.log("Exercise 01");
console.log("Run script 1");
function greets () {
	console.log('Hello!');
	greets = function () {			// <-- assegno a variabile globale greets una funzione
		console.log('Bye!');
		return greets;				// <-- ritorno la funzione assegnata alla variabile locale greets
	};
	return greets;
}

greets();							// esegue la funzione greets esterna, stampa "Hello!" e ritorna la funzione interna. La sua eseguzione determinerà la sua riscrittura.
							
greets()();							// esegue la funzione greets associata alla variabile GLOBALE la quale ritorna nuovamente se stessa, dunque rieseguita, stampa "Bye!" "Bye"

greets()()();						// esegue la funzione greets associata alla variabile GLOBALE stampa "Bye!" "Bye!" "Bye!"

console.log("\nRun script 2");
function greets () {
	console.log('Hello!');
	var greets = function () {		// <-- assegno a variabile locale greets una funzione
		console.log('Bye!');
		return greets;
	};
	return greets;					// <-- ritorno la funzione assegnata alla variabile locale greets
}

greets();							// esegue la funzione greets esterna, stampa "Hello!" e ritorna la funzione interna.

greets()();							// esegue la funzione greets esterna, stampa "Hello!" e ritorna la funzione interna che eseguita stamperà "Bye!"

greets()()();						// esegue la funzione greets esterna, stampa "Hello!", ritorna la funzione interna che eseguita stamperà "Bye!", ritorna la funzione interna che eseguita stamperà "Bye!"

									//OSSERVAZIONE: Se i due blocchi di script sono eseguiti in cascata l'unica funzione greets definita è l'ultima in ordine spaziale
console.log("");
//Esercizio-02: Funzione che genera matrici identità n*n
console.log("Exercise 02");
function identity(n){
	if(n%1 != 0 || n<=0)
		return 'Only positive and integer numbers are permitted (Natural)';
	var mat = new Array();
	for(var i=0; i<n; i++)
		mat[i]= new Array();
	for(var i=0; i<n; i++)
		for(var j=0; j<n; j++)
			(i===j) ? mat[i][j]=1: mat[i][j]=0;
		return mat;
	}

//Funzione di supporto per loggare in output una versione testuale di una matrice
function MatrixToString(matrix){
	if(!(matrix instanceof Array &&matrix[0] instanceof Array))
		return 'Only matrix are permitted';
	var str = "";
	for(var i=0; i<matrix.length; i++){
		for(var j=0; j<matrix[0].length; j++)
			str+=matrix[i][j]+"\t";
		console.log(str);
		str="";
	}
}

//Log test example
console.log(MatrixToString(identity(10)));

console.log("");

//Esercizio-03: Funzione di fibonacci implementazione con memoization pattern
console.log("Exercise 03");
function fibonacci(i){
	if(i%1 != 0)
		return NaN;
	if(i<0)
		return 'Only positive and integer numbers are permitted (Natural)';
	if (!(i in fibonacci)) {
		fibonacci[i] = fibonacci(i-1)+fibonacci(i-2);
	}
	return fibonacci[i];
}

fibonacci[0]=0;
fibonacci[1]=1;
fibonacci[2]=1;

//Log test example
console.log("fibonacci(0)="+fibonacci(0)+", fibonacci(1)="+fibonacci(1)+", fibonacci(2)="+fibonacci(2)+", fibonacci(10)="+fibonacci(10));