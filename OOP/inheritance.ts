class BasePoint {
    protected x: number;
    y: number;


    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    public getDistanseToStart(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    static origin = new Point(0, 0);
    toString() {
        return 'x=' + this.x + ' y=' + this.y;
    }

}


enum Color {
    Red,
    Green,
    Black
}

class ColoredPoint extends BasePoint {
    constructor(x: number, y: number, private readonly color: Color) {
        super(x, y);
    }

    getColor() {
        return this.color;
    }

    public toString() {
        return super.toString() + " color=" + Color[this.color];
    }

    someMethod() {
        let x = this.x;
    }
}

let pointBase = new BasePoint(5, 5);

let coloredPoint = new ColoredPoint(5, 7, Color.Black);
console.log(coloredPoint.toString());