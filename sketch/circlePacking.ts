interface Circle {
    pos: Position;
    radius: number;
}
interface Position {
    x: number;
    y: number;
}

function calculatePackedCircles(areaWidth: number, areaHeight: number): Circle[] {
    //TODO: you need to implement this function properly!  
    //These are just a couple of random circles, with no consideration yet for overlap.
    return [
        { pos: { x: 300, y: 300 }, radius: 100 },
        { pos: { x: random(0, areaWidth), y: random(0, areaHeight) }, radius: 40 },
    ];
}
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
/** Returns the distance between two given positions.
    This function doesn't require p5.js 
 */
function distance(p1: Position, p2: Position): number {
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;
    const hyp = Math.sqrt(x * x + y * y);
    return hyp;
}