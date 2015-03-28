//Esercizi-3 js
//write a function select(data, key, values) that given
//an array of objects data, a string key and an array of values values,
//returns the array of the objects where the property key is equal to one of the values in values.

//************************ GENERAZIONE DELL'INPUT
var data = [
	{id:'01', name:'duffy'},
	{id:'02', name:'michey'},
	{id:'03', name:'donald'},
	{id:'04', name:'goofy'},
	{id:'05', name:'minnie'},
	{id:'06', name:'scrooge'}
	];
var key = 'name';
var values = ['goofy', 'scrooge'];

//************************ Esercizio 04
//Implementazione ONE-LINE
function select(data,key,values){
	return data.filter(function(x){if(values.indexOf(x[key])!=-1) return x;});
}


//************************ TESTING
select(data, key, values);