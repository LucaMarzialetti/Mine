//Esercizi-2 js
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