var PointProgram;
(function (PointProgram) {
    var Enums;
    (function (Enums) {
        var Color;
        (function (Color) {
            Color[Color["Red"] = 0] = "Red";
            Color[Color["Green"] = 1] = "Green";
            Color[Color["Black"] = 2] = "Black";
        })(Color = Enums.Color || (Enums.Color = {}));
    })(Enums = PointProgram.Enums || (PointProgram.Enums = {}));
})(PointProgram || (PointProgram = {}));
var SomeEnum;
(function (SomeEnum) {
    SomeEnum[SomeEnum["First"] = 0] = "First";
    SomeEnum[SomeEnum["Last"] = 1] = "Last";
})(SomeEnum || (SomeEnum = {}));
var Points;
(function (Points) {
    class Point {
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
    Point.origin = new Point(0, 0);
    Points.Point = Point;
    class ColoredPoint extends Point {
        constructor(x, y, color) {
            super(x, y);
            this.color = color;
        }
        getColor() {
            return this.color;
        }
        toString() {
            return super.toString() + " color=" + PointProgram.Enums.Color[this.color];
        }
        someMethod() {
            let x = this.x;
        }
    }
    Points.ColoredPoint = ColoredPoint;
})(Points || (Points = {}));
var MyNamespace;
(function (MyNamespace) {
    class User {
        constructor(id, name, phone) {
            this.id = id;
            this.name = name;
            this.phone = phone;
        }
        getInfo() {
            return 'id=' + this.id
                + ' name' + this.name
                + ' phone=' + this.phone;
        }
    }
    MyNamespace.User = User;
})(MyNamespace || (MyNamespace = {}));
window.onload = () => {
    let user = new MyNamespace.User(12, "Petrovich", "007");
    console.log(user.getInfo());
    let point = new Points.Point(5, 5);
    console.log(point.getDistanseToStart());
    var el = document.getElementById('content');
};
//# sourceMappingURL=app.js.map