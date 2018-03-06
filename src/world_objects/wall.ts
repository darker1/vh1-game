import { Sprite, SpriteLocation } from "./sprite";

export class Wall extends Sprite {
    private _startLocation: SpriteLocation;
    private _endLocation: SpriteLocation;

    protected drawSprite(which: string, sprite: SpriteLocation, destination: SpriteLocation, ctx: CanvasRenderingContext2D) {
        const distance = Math.sqrt(Math.pow(this._startLocation.x - this._endLocation.x, 2) + Math.pow(this._startLocation.y - this._endLocation.y, 2));
        const loc: SpriteLocation = { x: this._startLocation.x, y: this._startLocation.y, w: this._startLocation.w, h: this._startLocation.h };
        
        const slope = (this._startLocation.y - this._endLocation.y)/(this._startLocation.x - this._endLocation.x);

        for (let i = 0; i < distance; i++) {
            
            super.drawSprite(which, sprite, loc, ctx);
        }
    }
}