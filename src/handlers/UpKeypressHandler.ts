import { IKeypressEventHandler, KeypressEventHandler } from "./IKeypressEventHandler";

export class UpKeypressHandler extends KeypressEventHandler {
    HandleKeypress(event: KeyboardEvent, objs: any): void {
        if (event.keyCode === 38) {
            console.log('Up Pressed');
            objs.loc = objs.pod.getCurrentCoords();
            if (objs.loc.y - objs.STEP > 0) {
                objs.loc.y = objs.loc.y - objs.STEP;
            } else {
                //TODO: replace with var
                objs.loc.y = 0;
            }
            objs.pod.update(objs.loc.which, objs.loc.x, objs.loc.y);
        }
        this.MoveNext(event, objs);
    }
}