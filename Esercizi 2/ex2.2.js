//Esercizi-2 js
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