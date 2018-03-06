import { Redrawable } from "./redrawable";

export interface SpriteOptions {
    src: string;
    sprites: { [key: string]: SpriteLocation };
}

export interface SpriteLocation { x: number, y: number, w: number, h: number }

export class Sprite implements Redrawable {

    private _rendered: boolean;
    private _image: HTMLImageElement;
    private _imageLoaded: boolean;

    private _sprites: { [key: string]: SpriteLocation };

    private _state?: { sprite: SpriteLocation, destination: SpriteLocation };
    private _currentLocation?: SpriteLocation;
    private _currentSprite: {which: string, sprite: SpriteLocation};

    public constructor(options: SpriteOptions) {
        this._image = new Image();
        this._image.onload = () => this._imageLoaded = true;
        this._image.src = options.src;
        this._sprites = options.sprites;
    }

    public render(which: string, dx: number, dy: number, dw?: number, dh?: number): (ctx: CanvasRenderingContext2D) => void {
        return (ctx: CanvasRenderingContext2D) => {
            if (!this._imageLoaded) {
                //modify the onload to do this render
                this._image.onload = () => {
                    this._imageLoaded = true;

                    const values = this.prepareLocations(which, dx, dy, dw, dh);
                    this.drawSprite(which, values.sprite, values.destination, ctx);
                    this._rendered = true;
                }
                return;
            }
            const values = this.prepareLocations(which, dx, dy, dw, dh);
            this.drawSprite(which, values.sprite, values.destination, ctx);
            this._rendered = true;
        }
    }

    public update(which: string, dx: number, dy: number, dw?: number, dh?: number) {
        if (!this._rendered) {
            console.log(`Sprite ${which} has not been rendered yet, but UPDATE was called.`);
            return;
        }
        this._state = this.prepareLocations(which, dx, dy, dw, dh);   
        this._currentLocation = this._state.destination;
        this._currentSprite = {which: which, sprite: this._state.sprite};
    }
    
    public getCurrentCoords(): {x:number, y:number, which: string} {
        return { x: this._currentLocation.x, y: this._currentLocation.y, which: this._currentSprite.which}
    }

    public redraw(): (ctx: CanvasRenderingContext2D) => void {
        if (!this._rendered) {
            console.log('Sprite has not been rendered yet, but REDRAW was called.');
            return;
        }
        return (ctx: CanvasRenderingContext2D) => {
            this.drawSprite(this._currentSprite.which, this._state.sprite, this._state.destination, ctx);
        }
    }

    private prepareLocations(which: string, dx: number, dy: number, dw?: number, dh?: number)
        : { sprite: SpriteLocation, destination: SpriteLocation } {

        const sprite = this._sprites[which];
        if (!sprite) {
            console.log(`Cannot find sprite ${which}`);
        }
        if (!dw) {
            dw = sprite.w;
        }

        if (!dh) {
            dh = sprite.h;
        }

        return { sprite: sprite, destination: { x: dx, y: dy, w: dw, h: dh } as SpriteLocation };
    }

    protected drawSprite(which: string, sprite: SpriteLocation, destination: SpriteLocation, ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this._image, sprite.x, sprite.y, sprite.w, sprite.h, destination.x, destination.y, destination.w, destination.h);
        this._currentLocation = destination;
        this._currentSprite = {which: which, sprite: sprite};
    }
}