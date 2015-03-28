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