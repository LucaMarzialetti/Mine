//Esercizi-4 js

/*
write a constructor function Trinagle
that create a triangle given its three edges.

write a method perimeter for Triangle
that compute the perimeter of the triangle.

write a method area for Triangle
that compute the area of the triangle
(Do you remeber the Erone's formula?).
*/
function Triangle(a,b,c){
	this.a=a;
	this.b=b;
	this.c=c;
}

Triangle.prototype.perimeter = function(){return this.a+this.b+this.c;};
Triangle.prototype.area = function(){var sp = this.perimeter()/2; return Math.sqrt(sp*(sp-this.a)*(sp-this.b)*(sp-this.c));