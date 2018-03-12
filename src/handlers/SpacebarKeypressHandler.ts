import { IKeypressEventHandler, KeypressEventHandler } from "./IKeypressEventHandler";
import { Wall } from "../world_objects/wall";
import { SpriteOptions } from "../world_objects/sprite";

export class SpacebarKeypressHandler extends KeypressEventHandler {
  HandleKeypress(event: KeyboardEvent, objs: any): void {
    if (event.keyCode === 32) {
      console.log('Spacebar Pressed');
      // const podX = objs.pod.getCurrentCoords().x + 30;
      // objs.wall1.setEndCoords(podX, 300);
      // objs.wall2.setEndCoords(podX, 100);
      // const wallOptions = {
      //   src: '../../assets/wall.jpg',
      //   sprites: {
      //     'normal': { x: 0, y: 0, w: 3, h: 3 }
      //   }
      // } as SpriteOptions;
      // const wall3: Wall = new Wall(wallOptions);
      // const wall4: Wall = new Wall(wallOptions);
      // wall3.setEndCoords(objs.canvas.width, 200);
      // wall3.render('normal', podX, 300, 6, 6)(objs.ctx);
      // wall4.setEndCoords(objs.canvas.width, 0)
      // wall4.render('normal', podX, 100, 6, 6)(objs.ctx);

      // objs.redrawables.push(wall3);
      // objs.redrawables.push(wall4);
    }
    this.MoveNext(event, objs);
  }
}