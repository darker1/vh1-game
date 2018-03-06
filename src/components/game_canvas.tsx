import * as React from "react";
import { Sprite, SpriteOptions } from "../world_objects/sprite";
import { Background } from "../world_objects/background";
import { Redrawable } from "../world_objects/redrawable";
import { IKeypressEventHandler } from "../handlers/IKeypressEventHandler";
import { LeftKeypressHandler } from "../handlers/LeftKeypressHandler";
import { RightKeypressHandler } from "../handlers/RightKeypressHandler";
import { UpKeypressHandler } from "../handlers/UpKeypressHandler";
import { DownKeypressHandler } from "../handlers/DownKeypressHandler";
import { Wall } from "../world_objects/wall";
import { SpacebarKeypressHandler } from "../handlers/SpacebarKeypressHandler";
export interface CanvasProps { text: string; }

export class Canvas extends React.Component<CanvasProps, {}> {
    readonly STEP: number = 25;

    refs: {
        canvas: HTMLCanvasElement
    }

    componentDidMount() {
        const redrawables: Redrawable[] = [];
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        const keyhandlers : IKeypressEventHandler = this.initHandlers();

        const bkgdSource = 'https://www.theplace2.ru/archive/kate_bock/img/kate_bock_si_swimsuit_2016_7.jpg';
        const background: Background = new Background(bkgdSource, canvas.width, canvas.height);
        
        const podOptoins = {
            src: '../../assets/pod.png',
            sprites: {
                'normal': { x: 0, y: 0, w: 269, h: 93 },
                'danger': { x: 0, y: 93, w: 269, h: 93 }
            }
        } as SpriteOptions;
        const pod: Sprite = new Sprite(podOptoins);

        const wallOptions = {
            src: '../../assets/wall.jpg',
            sprites: {
                'normal': { x: 0, y: 0, w: 3, h: 3 }
            }
        } as SpriteOptions;
        const wall1: Wall = new Wall(wallOptions);
        const wall2: Wall = new Wall(wallOptions);

        document.addEventListener('keydown', (event) => {
            let loc: {x: number, y: number, which: string};
            keyhandlers.HandleKeypress(event, {pod: pod, loc: loc, wall1: wall1, wall2: wall2, STEP: this.STEP, canvas: canvas, ctx: ctx, redrawables: redrawables});
            this.redraw(canvas,ctx, redrawables);
        });

        let current: 'normal'|'danger' = 'normal';
        // render actions
        background.render()(ctx);
        pod.render(current, 0, 135)(ctx);
        wall1.setEndCoords(canvas.width, 300);
        wall1.render('normal', 0, 300, 6, 6)(ctx);
        wall2.setEndCoords(canvas.width, 100)
        wall2.render('normal', 0, 100, 6, 6)(ctx);

        redrawables.push(background);
        redrawables.push(pod);
        redrawables.push(wall1);
        redrawables.push(wall2);
        /*
        setInterval(() => {
            if(current === 'normal') {
                current = 'danger';
            } else {
                current = 'normal';
            }
            let loc = pod.getCurrentCoords();
            pod.update(current, loc.x, loc.y);
            this.redraw(canvas, ctx, redrawables);

        }, 1000);
*/

    }

    initHandlers(): IKeypressEventHandler {
        return new LeftKeypressHandler(
            new RightKeypressHandler(
                new DownKeypressHandler(
                    new UpKeypressHandler(
                        new SpacebarKeypressHandler()))));
    }

    redraw(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, redrawables: Redrawable[]) {
        ctx.clearRect(0,0,canvas.width, canvas.height);
        redrawables.forEach((v,i,arr) => v.redraw()(ctx));
    }

    generateTube(length: number, height: number, startY: number) {

    }

    render() {
        return (
            <div>
                <canvas ref="canvas" width={640} height={425} />
            </div>
        )
    }
}


