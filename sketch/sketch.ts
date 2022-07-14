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

function calculatePackedCircles(){
  let validatedCircles : Circle[]= []

  for (let i: number=0; i<1000; i++){
    const c = {radius: random(2.5,50), 
    pos: {x:random(0, windowWidth), y: random(0, windowHeight)}}

  
   // let candidate = circle(random(0,windowWidth), random(0, windowHeight), random(5,100))
    if (validatedCircles.length === 0){
      validatedCircles.push(c)
      drawCircle(c)
    }
    else{
        for (let item of validatedCircles){
          let distCircles = dist(item.pos.x, item.pos.y, c.pos.x, c.pos.y);
          let radii = c.radius + item.radius;
          if (distCircles>radii){
            drawCircle(c)
            validatedCircles.push(c)
          }

        }

        }
      
    }

  }
    



}