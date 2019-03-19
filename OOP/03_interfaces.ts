interface IPoint {
    x: number;
    y: number;
    length(): number;
}
let pointFromInterface: IPoint = {
    x: 5,
    y: 5,
    length: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
class PointFromInterface implements IPoint {
    constructor(public x: number, public y: number) { }
    public length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}


let xxxcxc: IPoint = new PointFromInterface(34, 56);
console.log(typeof xxxcxc);
console.log(xxxcxc.length());