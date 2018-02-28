var puck = {
  x: 200,
  y: 200,
  xSpeed: -1,
  ySpeed: 2,
  r: 15
};
var edgeOffset = 20;

var player1 = {
  x: edgeOffset,
  y: 200,
  ht: 50,
  wd: 10,
	score: 0
};

var player2 = {
  x: 400-edgeOffset,
  y: 200,
  ht: 50,
  wd: 10,
	score: 0
};


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  textSize(50);
	text(player1.score +' : '+player2.score,160,130);
  // draw puck
  ellipse(puck.x, puck.y, puck.r);
  
  if (puck.y < 0 || puck.y > height) {
    puck.ySpeed = -puck.ySpeed;
  }
  if(puck.x<0){
		puck.x= 200;
  	puck.y= 200;
  	puck.xSpeed= random(-1,-0.3);
  	puck.ySpeed= random(-1,-0.3);
		player2.score +=1;
	}
	if(puck.x>width){
		puck.x= 200;
  	puck.y= 200;
  	puck.xSpeed= random(0.3,1);
  	puck.ySpeed= random(0.3,1);
		player1.score +=1;
	}
	
	
	//paddle bounce ball
  if (puck.x-puck.r/2<player1.x+player1.wd&&puck.y>player1.y&&puck.y<player1.y+player1.ht){
		puck.x+=2
		puck.xSpeed=-puck.xSpeed;
	}
	if (puck.x+puck.r/2>player2.x&&puck.y>player2.y&&puck.y<player2.y+player2.ht){
		puck.x-=2
		puck.xSpeed=-puck.xSpeed;
	}
	
  puck.x += puck.xSpeed;
  puck.y += puck.ySpeed;
  
  // draw paddles
  rect(player1.x, player1.y, player1.wd, player1.ht);
  rect(player2.x, player2.y, player2.wd, player2.ht);
  
}

function keyPressed() {
  if (key == 'Q') {
    player1.y -= 10;
  }
  
  if (key == 'A') {
    player1.y += 10;
  }
	if (key == 'P') {
    player2.y -= 10;
  }
  
  if (key == 'L') {
    player2.y += 10;
  }
}
