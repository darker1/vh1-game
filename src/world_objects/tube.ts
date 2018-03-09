import { Sprite, SpriteLocation, SpriteOptions } from "./sprite";
import { Wall } from "./wall";

export class Tube extends Sprite {

  private _startLocation: SpriteLocation;
  private _walls: Wall[];

  public constructor(options: SpriteOptions) {
    super(options);
    this._walls = [new Wall(options), new Wall(options)];
  }

  public renderTube(tubeHeight: number, endX: number, endY: number, which: string, dx: number, dy: number, dh?: number, dw?: number): (ctx: CanvasRenderingContext2D) => void {

    this._startLocation = { x: dx, y: dy, h: dh, w: dw };
    this._state = { sprite: this._sprites[which], destination: null };

    this._walls[0].setEndCoords(endX, endY);
    this._walls[1].setEndCoords(endX, endY + tubeHeight);

    return this.render(which, dx, dy, dw, dh);
  }

  protected drawSprite(which: string, sprite: SpriteLocation, destination: SpriteLocation, ctx: CanvasRenderingContext2D) {
    /*const distance = Math.sqrt(Math.pow(this._startLocation.x - this._endLocation.x, 2) + Math.pow(this._startLocation.y - this._endLocation.y, 2));
    const loc: SpriteLocation = { x: this._startLocation.x, y: this._startLocation.y, w: this._startLocation.w, h: this._startLocation.h };

    //const slope = (this._startLocation.y - this._endLocation.y) / (this._startLocation.x - this._endLocation.x);

    for (let i = 0; i < distance; i++) {
      //step along the line via the slope
      loc.x = loc.x + 1;
     // loc.y = loc.y + slope;

      super.drawSprite(which, sprite, loc, ctx);
  }*/
  }

}