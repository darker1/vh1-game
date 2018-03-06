export interface IKeypressEventHandler {
    SetNext(handler: IKeypressEventHandler): void;
    HandleKeypress(event: KeyboardEvent, objs: any): void;
}

export abstract class KeypressEventHandler implements IKeypressEventHandler {
    private _next: IKeypressEventHandler;

    public constructor(nextHandler?: IKeypressEventHandler) {
        if (nextHandler) {
            this.SetNext(nextHandler);
        }
    }

    SetNext(handler: IKeypressEventHandler): void {
        this._next = handler;
    }

    protected MoveNext(event: KeyboardEvent, objs: any) {
        if (this._next != null) {
            return this._next.HandleKeypress(event, objs);
        }
    }

    abstract HandleKeypress(event: KeyboardEvent, objs: any): void;
}