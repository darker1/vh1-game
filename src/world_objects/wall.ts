import { Sprite, SpriteLocation } from "./sprite";

export class Wall extends Sprite {
    private _startLocation: SpriteLocation;
    private _endLocation: SpriteLocation;

    public setEndCoords(dx: number, dy: number, dh?: number, dw?: number) {
        this._endLocation = {x: dx, y:dy, h: dh, w:dw};
    }
    public render(which: string, dx: number, dy: number, dh?: number, dw?: number): (ctx: CanvasRenderingContext2D) => void  {
        if(!this._endLocation) {
            throw new Error('Cannot call render on a wall without calling setEndCoords.');
        }

        this._startLocation  = {x: dx, y:dy, h: dh, w:dw}; 
        this._state = {sprite: this._sprites[which], destination: null};
        
        return super.render(which, dx, dy, dw, dh);
    }
    protected drawSprite(which: string, sprite: SpriteLocation, destination: SpriteLocation, ctx: CanvasRenderingContext2D) {
        const loc: SpriteLocation = { x: this._startLocation.x, y: this._startLocation.y, w: this._startLocation.w, h: this._startLocation.h };
        const distance: number = this._endLocation.x - this._startLocation.x;
        const height: number = Math.abs(this._startLocation.y - this._endLocation.y);
        const startY = loc.y;
        
        for (let i = 0; i < distance; i++) {
            
            loc.x = loc.x + 1;
            loc.y = (startY-height) + ( height * Math.cos((Math.PI * i)/(distance)));

            super.drawSprite(which, sprite, loc, ctx);
        }
    }
}