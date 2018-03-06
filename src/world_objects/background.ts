import { Redrawable } from "./redrawable";

export class Background implements Redrawable {
    
    redraw(): (ctx: CanvasRenderingContext2D) => void {
        return (ctx: CanvasRenderingContext2D) => {
            if (!this._rendered) {
                console.log('background has not been rendered yet, but UPDATE was called.');
                return;
            }
            ctx.drawImage(this._image, 0, 0, this._image.width, this._image.height, 0, 0, this._w, this._h);
        }
    }

    private _rendered: boolean;
    private _imageLoaded: boolean;
    private _image: HTMLImageElement;
    private _w: number;
    private _h: number;

    public constructor(src: string, cW: number, cH: number) {
        this._image = new Image();
        this._image.onload = () => this._imageLoaded = true;
        this._image.src = src;
        this._w = cW;
        this._h = cH;
    }

    public render(): (ctx: CanvasRenderingContext2D) => void {
        return (ctx: CanvasRenderingContext2D) => {
            if (!this._imageLoaded) {
                //modify the onload to do this render
                this._image.onload = () => {
                    this._imageLoaded = true;
                    ctx.drawImage(this._image, 0, 0, this._image.width, this._image.height, 0, 0, this._w, this._h);

                    this._rendered = true;
                }
                return;
            }
            ctx.drawImage(this._image, 0, 0, this._image.width, this._image.height, 0, 0, this._w, this._h);
            this._rendered = true;
        }
    }

    public update(): (ctx: CanvasRenderingContext2D) => void {
        return (ctx: CanvasRenderingContext2D) => {
            if (!this._rendered) {
                console.log('background has not been rendered yet, but UPDATE was called.');
                return;
            }
            ctx.drawImage(this._image, 0, 0, this._image.width, this._image.height, 0, 0, this._w, this._h);
        }
    }
}