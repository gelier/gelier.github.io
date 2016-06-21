var bubbles = [];
var d = [];
function setup() {
	createCanvas(windowWidth,windowHeight);
}

function draw() {
	background(0);
	for (var i=0 ; i<bubbles.length ; i++) {
		bubbles[i].move();
		bubbles[i].display();
	}

	for (var i =0 ; i<bubbles.length; i++) {
		for (var j=0; j<bubbles.length; j++) {
			if (i!=j && bubbles[i].intersects(bubbles[j])) {
				
				bubbles[i].speedX = bubbles[i].speedX*-1;
				bubbles[i].speedY = bubbles[i].speedY*-1;
				//bubbles[j].speedX = bubbles[j].speedX*-1;
				//bubbles[j].speedY = bubbles[j].speedY*-1;
			}
		}
	}
}	
	

//function mousePressed() {
function mousePressed() {
	//bubbles.push(new Bubble())
	bubbles.push(new Bubble(mouseX,mouseY))
}

//function Bubble() {
function Bubble(x,y) {
	//this.x=random(0,width);
	//this.y=random(0,height);
	this.x=x;
	this.y=y;
	this.r=random(10,20);
	this.speedX=random(-2,2);
	this.speedY=random(-2,2);

	this.display=function(){
		fill(255);
		ellipse(this.x,this.y,this.r*2,this.r*2);
	}

	this.move=function(){
		this.x = this.x+this.speedX;
		this.y = this.y+this.speedY;
		if ((this.x>width-this.r) || (this.x<this.r)) {
			this.speedX = this.speedX * -1
		}
		if ((this.y>height-this.r) || (this.y<this.r)) {
			this.speedY = this.speedY * -1
		}
	}

	this.intersects = function(other) {
		var d = dist(this.x,this.y,other.x,other.y)
		if (d < this.r + other.r) {
			return true;
		} 
		else {
			return false;
		}
	}
}