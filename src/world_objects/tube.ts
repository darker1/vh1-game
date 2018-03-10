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
    for (let i = 0; i < this._walls.length; i++) {
      this._walls[i].
    }
  }

}