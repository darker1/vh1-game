import { IKeypressEventHandler, KeypressEventHandler } from "./IKeypressEventHandler";

export class RightKeypressHandler extends KeypressEventHandler {
    HandleKeypress(event: KeyboardEvent, objs: any): void {
        if (event.keyCode === 39) {
            console.log('Right Pressed');
            objs.loc = objs.pod.getCurrentCoords();
            if (objs.loc.x + objs.STEP < objs.canvas.width) {
                objs.loc.x = objs.loc.x + objs.STEP;
            } else {
                //TODO: replace with var
                objs.loc.x = objs.canvas.width - 269;
            }
            objs.pod.update(objs.loc.which, objs.loc.x, objs.loc.y);
        }
        this.MoveNext(event, objs);
    }
}