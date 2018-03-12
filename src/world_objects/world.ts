export class World {

  public constructor(public width: number, public height: number) {
  }

  public generateHillPoints(n: number): {x: number, y:number}[] {
    // each hill is 2 - 3 inflection points.  
    // the highest we can go is height / 2
    const inflectionPoints: {x: number, y:number}[] = [{x: 0, y: this.height/2}];
    let currentX = 600;
    let currentY = inflectionPoints[0].y;
    // set space for each section
    // save 600 for beginning and end
    let sections = Math.floor((this.width-1200)/n); 
    
    for (let i = 0; i < n; i++) {
      // number of inclection points 
      // 70% of hills return to level afterwards
      const numPoints: number = Math.random() * 10 <= 3 ? 1: 2;
      const endOfSection = currentX + sections;

      // figure out how far ahead to set the first pont
      currentX = currentX + Math.floor(sections * .6 * Math.random());
      inflectionPoints.push({x:currentX, y: currentY});

      for (let i = 0; i < numPoints; i++) {
        //if we are closer to the top, we should go down and vice versa
        const goUp = (Math.random() * this.height) > currentY;
        currentY = currentY - Math.floor(Math.random() * .8 * (currentY - (goUp ? this.height : 0)));
        currentX = Math.floor(Math.random() * ((endOfSection - currentX)* .8))  + currentX;
        inflectionPoints.push({x: currentX, y: currentY});
      }
    }
    inflectionPoints.push({x: this.width, y: currentY}); 
    console.log(inflectionPoints);
    return inflectionPoints;
  }
}