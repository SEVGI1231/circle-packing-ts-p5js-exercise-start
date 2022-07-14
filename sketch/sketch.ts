function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background('white');

  const circlesArray = calculatePackedCircles(width, height);

  for (const c of circlesArray) {
    drawCircle(c);
  }
}

function drawCircle(c: Circle) {
  const shade = random(50, 100);
  fill(shade);
  noStroke();
  circle(c.pos.x, c.pos.y, c.radius * 2);
}

// If user clicks, draw() will be called again (eventually)
function mousePressed() {
  redraw();
}

/*function calculatePackedCircles():Circle[]{

	validatedCircles = empty list of circles
	
	repeat 1000 times
	
			candidate = generate a circle with random position and radius within window width and height values
	
			if candidate does not overlap with any circle of validatedCircles
	
			    add candidate to validatedCircles
	
			else
	
			    do nothing (we will not use this candidate)
	
	return validatedCircles
}*/

function calculatePackedCircles(): Circle[]{
  let validatedCircles : Circle[]= []

  circle(random(0,windowWidth), random(0,))


}