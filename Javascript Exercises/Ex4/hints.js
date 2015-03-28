/**Il variable hoisting fa salire la DICHIARAZIONE DI VARIABILE, l'assegnazione delle variabili avviene in loco**/
	console.log("Chi è pippo? "+pippo);		//l'hoisting della variabile avviene comunque prima dell'esecuzione della funzione
	var pippo = function(){					//questa assegnazione avviene a tempo di esecuzione
		console.log("in pippo1");
	}

	pippo();

	var pippo = function(){
		console.log("in pippo2");
	}

	pippo();

/*REFRESH NEEDED*/

/**Le definizioni di oggetti sono valutate in blocco prima di qualunuqe altra cosa ed in caso di overriding l'ultima prevale**/
	console.log(pippo);						//anche prima di incontrare il blocco di definizione, la funzione è già stata mappata
	pippo();

	function pippo (){
		console.log("pippo1");
	}

	pippo();

	function pippo (){						//l'ultima definizione è quella usata
		console.log("pippo2");
	}
	pippo();
	