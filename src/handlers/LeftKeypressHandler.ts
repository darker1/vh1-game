import { IKeypressEventHandler, KeypressEventHandler } from "./IKeypressEventHandler";

export class LeftKeypressHandler extends KeypressEventHandler {
    HandleKeypress(event: KeyboardEvent, objs: any): void {
        if (event.keyCode === 37) {
            console.log('Left Pressed');
            const loc = objs.pod.getCurrentCoords();
            if (loc.x - objs.STEP > 0) {
                loc.x = loc.x - objs.STEP;
            } else {
                loc.x = 0;
            }
            objs.pod.update(loc.which, loc.x, loc.y);
        }
        this.MoveNext(event, objs);
    }
}