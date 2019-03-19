class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    //constructor(public x: number, public y: number) { }
    getDistanseToStart() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
Point.zeroPoint = new Point(0, 0);
let originValue = Point.zeroPoint;
console.log(originValue);
let point = new Point(5, 5);
let result = point.getDistanseToStart();
console.log(result);
class Point2 {
    static getDistanseToStart() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
Point2.x = 10;
Point2.y = 10;
Point2.origin = new Point(0, 0);
//Point2.x = 7;
//Point2.y = 10;
let result2 = Point2.getDistanseToStart();
console.log(result2);
window.onload = () => {
    var el = document.getElementById('content');
};
class BasePoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getDistanseToStart() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    toString() {
        return 'x=' + this.x + ' y=' + this.y;
    }
}
BasePoint.origin = new Point(0, 0);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Black"] = 2] = "Black";
})(Color || (Color = {}));
class ColoredPoint extends BasePoint {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    toString() {
        return super.toString() + " color=" + Color[this.color];
    }
    someMethod() {
        let x = this.x;
    }
}
let pointBase = new BasePoint(5, 5);
let coloredPoint = new ColoredPoint(5, 7, Color.Black);
console.log(coloredPoint.toString());
//# sourceMappingURL=app.js.map