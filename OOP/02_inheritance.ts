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

    public get getColor() {
        return this.color;
    }

    public toString():string {
        return super.toString() + " color=" + Color[this.color];
    }

    someMethod(): number {
        return this.x;
    }
}

let myTrashArr = [1, true, "be be be", { a: 1, b: 2 }, [1, 2], null]; // string[], array, 
myTrashArr = [2, false, "kek", { a: 100, b: 300 }, [3, 5], null];
myTrashArr = ["string-yakijs", "false", 2];
let myArr: number[] | boolean[] | string[] | { a: number, b: string }[];
myArr = [true];
//myArr = [{ a: true, b: 12 }];
let myArr2: any[];

let objArr: BasePoint[];
objArr = [new BasePoint(1, 1), new ColoredPoint(2, 2, Color.Red)];

for (var i = 0; i < objArr.length; i++) {
    if (objArr instanceof ColoredPoint) {  // is
        let tmpObj = <ColoredPoint>objArr[i];  //as ColoredPoint
        console.log(`  ${tmpObj.getDistanseToStart()} ${tmpObj.someMethod()}`);
    } else {
        console.log(`  ${objArr[i].getDistanseToStart()} ${objArr[i]}`);
    }
}


let pointBase = new BasePoint(5, 5);
let coloredPoint = new ColoredPoint(5, 7, Color.Black);
let castedPoint: BasePoint = new ColoredPoint(10, 10, Color.Green);
console.log(coloredPoint.toString());
console.log(castedPoint.toString());
console.log((castedPoint as ColoredPoint).someMethod());
console.log((<ColoredPoint>castedPoint).someMethod());