//Esercizi-4 js
//implement a Adder objects with two methods: getCurrentSum()and add(number). Run the following main code to make sure everything works:

(function () {
  // write your code here to make the program work 

  function Summer(){
    if(this instanceof Summer)
      this.currentSum=0;
    else
      return new Summer();
  }

Summer.prototype.getCurrentSum = function(){
  return this.currentSum;
}

Summer.prototype.add = function(number){
  this.currentSum+=number;
}

  var s1 = Summer();
  var s2 = Summer();

  s1.add(10);
  s1.add(20);

  s2.add(30);

  s2.add(5);

  // prints 30
  console.log(s1.getCurrentSum());

  // prints 35
  console.log(s2.getCurrentSum());

}());

