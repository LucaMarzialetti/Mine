//Esercizi-4 js
/*write a constructor function Point2D
that create a 2D point given its x and y coordinates.

write a contructor function Edge
that create an edge given its two vertices (i.e. two points).

write a method length for Edge
that compute the length of the edge.
*/

function Point2D(x,y){
	this.x=x;
	this.y=y;
}

function Edge(a,b){
	this.a=a;
	this.b=b;
}

Edge.prototype.length = function(){
	var x = Math.abs(a.x-b.x);
	var y = Math.abs(a.y-b.y);
	return Math.sqrt((x*x)+(y*y);
};