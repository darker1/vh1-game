import { IKeypressEventHandler, KeypressEventHandler } from "./IKeypressEventHandler";

export class DownKeypressHandler extends KeypressEventHandler {
    HandleKeypress(event: KeyboardEvent, objs: any): void {
        if (event.keyCode === 40) {
            console.log('Down Pressed');
            objs.loc = objs.pod.getCurrentCoords();
            if(objs.loc.y + 93 + objs.STEP < objs.canvas.height) {
                objs.loc.y = objs.loc.y + objs.STEP;
            } else {
                //TODO: replace with var
                objs.loc.y = objs.canvas.height - 93;
            }
            objs.pod.update(objs.loc.which, objs.loc.x, objs.loc.y);
        }
        this.MoveNext(event, objs);
    }
}