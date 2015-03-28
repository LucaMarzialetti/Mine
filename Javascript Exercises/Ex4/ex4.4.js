//Esercizi-4 js
//fill in the blanks to make the program work:

(function () {
	var person = {
	// fill code here
		buy: function(car){console.log("I'm rich");}
	};

	var  car = {
		// fill code here
		drive: function(){console.log("vrum vrum");},
		price: 2000
	};

	// print Vrum Vrum
	car.drive();

	// print I'm rich
	if ( car.price > 1000 ) {
		person.buy(car);
	}
}());

(function () {
  var employees = [];
  employees.push({hello: function(){console.log("I work at IBM");}});
  for (var i=0; i < employees.length; ++i ) {
    // print I work at IBM
    employees[i].hello();
  }
}());