namespace PointProgram.Enums {
    export enum Color {
        Red,
        Green,
        Black
    }
}

enum SomeEnum {
    First,
    Last
}

namespace Points {
    import someC = PointProgram.Enums.Color;// alias :-)
    export class Point {
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
    export class ColoredPoint extends Point {

        constructor(x: number, y: number, private readonly color: someC) {
            super(x, y);
        }

        getColor() {
            return this.color;
        }

        public toString() {
            return super.toString() + " color=" + someC[this.color];
        }

        someMethod() {
            let x = this.x;
        }

    }
}

namespace MyNamespace {

    import alias1 = Interfaces.IUser

    export namespace Interfaces {
        export interface IUser {
            name;
            id;
            getInfo();
        }
        export class SimeAnimal {
        } ;
    }

    export class User implements alias1 {

        constructor(public id: number,
            public name: string,
            public phone: string) {
        }

        getInfo() {
            return 'id=' + this.id
                + ' name' + this.name
                + ' phone=' + this.phone;
        }
    }
}


window.onload = () => {
    let user = new MyNamespace.User(12, "Petrovich", "007");
    console.log(user.getInfo());

    let point = new Points.Point(5, 5);
    console.log(point.getDistanseToStart());

    var el = document.getElementById('content');
};