import { Sprite, SpriteLocation, SpriteOptions } from "./sprite";
import { Wall } from "./wall";

export class Tube extends Sprite {

  private _startLocation: SpriteLocation;
  private _walls: Wall[];
  private _tubeHeight: number;

  public constructor(options: SpriteOptions, tubeHeight: number) {
    super(options);
    this._walls = [new Wall(options), new Wall(options)];
    this._tubeHeight = tubeHeight;
  }

  public renderTube(endX: number, endY: number, which: string, dx: number, dy: number, dh?: number, dw?: number): (ctx: CanvasRenderingContext2D) => void {
    if (!dw) {
      dw = this._sprites[which].w;
    }

    if (!dh) {
      dh = this._sprites[which].h;
    }

    this._startLocation = { x: dx, y: dy, h: dh, w: dw };
    this._state = { sprite: this._sprites[which], destination: null };

    this._walls[0].setEndCoords(endX, endY - Math.floor(this._tubeHeight / 2));
    this._walls[1].setEndCoords(endX, endY + Math.floor(this._tubeHeight / 2));

    return this.render(which, dx, dy, dw, dh);
  }

  public render(which: string, dx: number, dy: number, dh?: number, dw?: number): (ctx: CanvasRenderingContext2D) => void {
    return (ctx: CanvasRenderingContext2D) => {
      this._walls[0].render(which, dx, dy - Math.floor(this._tubeHeight / 2), dw, dh)(ctx);
      this._walls[1].render(which, dx, dy + Math.floor(this._tubeHeight / 2), dw, dh)(ctx);
    };
  }

  public redraw(): (ctx: CanvasRenderingContext2D) => void {
    return (ctx: CanvasRenderingContext2D) => {
      this._walls.forEach((v) => v.redraw()(ctx));
    }
  }

  protected drawSprite(which: string, sprite: SpriteLocation, destination: SpriteLocation, ctx: CanvasRenderingContext2D) {
    //pass through here, redraw is being used to make sure all walls are drawn
  }

}