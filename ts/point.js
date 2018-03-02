/**
 * tsc --target ES2016 main.ts && node main.js
 */
export class Point {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
    get x() {
        return this._x;
    }
    getY() {
        return this._y;
    }
    set x(value) {
        if (value < 0) {
            throw new Error('Value cannot be 0.');
        }
        this._x = value;
    }
}
