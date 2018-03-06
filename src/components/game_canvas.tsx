import * as React from "react";
import { Sprite, SpriteOptions } from "../world_objects/sprite";
import { Background } from "../world_objects/background";
import { Redrawable } from "../world_objects/redrawable";
import { IKeypressEventHandler } from "../handlers/IKeypressEventHandler";
import { LeftKeypressHandler } from "../handlers/LeftKeypressHandler";
import { RightKeypressHandler } from "../handlers/RightKeypressHandler";
import { UpKeypressHandler } from "../handlers/UpKeypressHandler";
import { DownKeypressHandler } from "../handlers/DownKeypressHandler";
export interface CanvasProps { text: string; }

export class Canvas extends React.Component<CanvasProps, {}> {
    readonly STEP: number = 5;

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
        
        document.addEventListener('keydown', (event) => {
            let loc: {x: number, y: number, which: string};
            keyhandlers.HandleKeypress(event, {pod: pod, loc: loc, STEP: this.STEP, canvas: canvas});
            this.redraw(canvas,ctx, redrawables);
        });

        let current: 'normal'|'danger' = 'normal';
        // render actions
        background.render()(ctx);
        pod.render(current, 0, 0)(ctx);

        redrawables.push(background);
        redrawables.push(pod);
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
    let image = new Image();
    image.onload = () => {
        for(let i : number = 0; i < canvas.width; i++) {
            ctx.drawImage(image, 0, 0, image.width, image.height, i,200,6,6);
        }
    };
    image.src = '../assets/wall.jpg';

    }

    initHandlers(): IKeypressEventHandler {
        return new LeftKeypressHandler(
            new RightKeypressHandler(
                new DownKeypressHandler(
                    new UpKeypressHandler())));
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


