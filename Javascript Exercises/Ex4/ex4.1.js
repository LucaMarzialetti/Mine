//Esercizi-4 js
//fill in the blanks to make the program work:

(function() {
  var larger = function(o1, o2) {
    if ( o1.size > o2.size ) {
        console.log('o1 is larger');
    } else {
        console.log('o2 is larger');
    }
  };

  var x = {size: 10};				// write code here (deve essere sicuramente un oggetto avente un campo size..)
  var y = {size: 20};				// write code here (deve essere sicuramente un oggetto avente un campo size..)

  larger(x, y);    
}());