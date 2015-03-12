//Esercizi-3 js

//************************ GENERAZIONE DELL'INPUT
var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."


//************************ Esercizio 03
//Implementazione ONE-LINE
function ex3(string){
		return string
					.split(" ")
					.map(function(x){return x[0].toUpperCase()+x.slice(1,x.length)})
					.join(" ");
}

//Implementazione con funzioni
function ex3(string){
	var splitted = string.split(" ");
	return splitted.map(capitalizeString).join(" ");
}


//************************ METODI DI SUPPORTO PER L'IMPLEMENTAZIONE CHE SFRUTTA LE FUNZIONI
//Funzione che restituisce la stringa con il primo carattere maiuscolo
function capitalizeString(string){
	return string=string[0].toUpperCase()+string.slice(1,string.length);
}


//************************ TESTING
ex3(text);