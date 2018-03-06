export interface Redrawable {
    redraw(): (ctx: CanvasRenderingContext2D) => void;
}