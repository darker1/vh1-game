import { Canvas } from "../components/game_canvas";
import { Redrawable } from "./redrawable";
import { Tube } from "./tube";
import { SpriteOptions } from "./sprite";

export class World {
  private _inflectionPoints: {x: number, y:number}[];
  private redrawables: Redrawable[] = []
  public constructor(public width: number, public height: number) {
  }

  public generateLargeCanvas(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    const wallOptions = {
      src: '../../assets/wall.jpg',
      sprites: {
          'normal': { x: 0, y: 0, w: 3, h: 3 }
      }
  } as SpriteOptions;

    for (let i = 0; i < this._inflectionPoints.length - 1; i++) {
      const basePoint: {x: number, y:number} = this._inflectionPoints[i];
      const endPoint:  {x: number, y:number} = this._inflectionPoints[i+1];
      const tube: Tube = new Tube(wallOptions, 200);
      
      tube.renderTube(endPoint.x, endPoint.y, 'normal', basePoint.x, basePoint.y, 6, 6)(ctx);
      console.info(tube);
      this.redrawables.push(tube);
    }
  }

  public generateHillPoints(n: number): {x: number, y:number}[] {
    // each hill is 2 - 3 inflection points.  
    // the highest we can go is height / 2
    this._inflectionPoints = [{x: 0, y: this.height/2}];
    let currentX = 60;
    let currentY = this._inflectionPoints[0].y;
    // set space for each section
    // save 600 for beginning and end
    let sections = Math.floor((this.width-120)/n); 
    
    for (let i = 0; i < n; i++) {
      // number of inclection points 
      // 70% of hills return to level afterwards
      const numPoints: number = Math.random() * 10 <= 3 ? 1: 2;
      const endOfSection = currentX + sections;

      // figure out how far ahead to set the first pont
      currentX = currentX + Math.floor(sections * .6 * Math.random());
      this._inflectionPoints.push({x:currentX, y: currentY});

      for (let i = 0; i < numPoints; i++) {
        //if we are closer to the top, we should go down and vice versa
        const goUp = (Math.random() * this.height) > currentY;
        currentY = currentY - Math.floor(Math.random() * .8 * (currentY - (goUp ? this.height : 0)));
        currentX = Math.floor(Math.random() * ((endOfSection - currentX)* .8))  + currentX;
        this._inflectionPoints.push({x: currentX, y: currentY});
      }
    }
    this._inflectionPoints.push({x: this.width, y: currentY}); 
    console.info(this._inflectionPoints);
    return this._inflectionPoints;
  }
}