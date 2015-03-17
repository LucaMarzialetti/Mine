//Esercizi-4 js
/*
define a Door constructor function. 
A door instance exposes the two methods open and close that chage the values of a state property respectively to open and closed.

define a SecurityDoor constructor function that inherits the bhehaviour from Door but once closed a security_door instance can be locked via the lock method. 
Invoking the unlock method, bring the security_door back to the close state.
*/

function Door(state){
	this.state=state || "";
}

Door.prototype.open = function(){if(this.state!=="lock")this.state="open"; else console.log("The door is "+this.state+", can't open it.");};
Door.prototype.close = function(){if(this.state!=="lock")this.state="close"; else console.log("The door is "+this.state+", can't close it.");};

function SecurityDoor(state){
	Door.call(this,state);
}

SecurityDoor.prototype = Object.create(Door.prototype);
SecurityDoor.prototype.constructor = SecurityDoor;

SecurityDoor.prototype.lock = function(){if(this.state==="close")this.state="lock";else console.log("You muse close the door before lock it.")};
SecurityDoor.prototype.unlock = function(){this.state="close";};

var door = new Door();
var sec_door = new SecurityDoor();