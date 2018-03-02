/**
 * tsc --target ES2016 main.ts && node main.js
 */
export class Point {

    constructor(private _x?: number, private _y?: number) {

    }

    public draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

    get x(): number | undefined {
        return this._x;
    }

    public getY() {
        return this._y;
    }

    set x(value) {
        if (value < 0) {
            throw new Error('Value cannot be 0.');
        }
        this._x = value;
    }
}
