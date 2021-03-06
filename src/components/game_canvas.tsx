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
import { Tube } from "../world_objects/tube";
import { SpacebarKeypressHandler } from "../handlers/SpacebarKeypressHandler";
import { World } from "../world_objects/world";

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

        const bkgdSource = 'https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg';
        const background: Background = new Background(bkgdSource, canvas.width, canvas.height);
        
        const podOptoins = {
            src: '../../assets/pod_virgin.png',
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
        const tube: Tube = new Tube(wallOptions, 200);

        //background.render()(ctx);

        const world = new World(10000, 1000);
        world.generateHillPoints(10);
        world.generateLargeCanvas(canvas);
/*
        document.addEventListener('keydown', (event) => {
            let loc: {x: number, y: number, which: string};
            keyhandlers.HandleKeypress(event, {pod: pod, loc: loc, STEP: this.STEP, canvas: canvas, ctx: ctx, redrawables: redrawables});
            this.redraw(canvas,ctx, redrawables);
        });

        let current: 'normal'|'danger' = 'normal';
        // render actions
        
        pod.render(current, 0, 135, 86.7, 30)(ctx);
        tube.renderTube(canvas.width, 200, 'normal', 0,200,6,6)(ctx);

        redrawables.push(background);
        redrawables.push(pod);
        redrawables.push(tube);
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
        redrawables.forEach((v,i,arr) => {
            v.redraw()(ctx);
        });
    }

    generateTube(length: number, height: number, startY: number) {

    }

    render() {
        return (
            <div>
                <canvas ref="canvas" width={10000} height={1000} />
            </div>
        )
    }
}


