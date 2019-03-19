abstract class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    abstract move(distanceInMeters: number): void;
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distance) {
        console.log("Slithering");
    }
}

class Fish extends Animal {
    constructor(name: string) { super(name); }
    move(distance) {
        console.log("Swim");
    }
}

let snake: Animal = new Snake('snake');
snake.move(5);

let tvarjuka: Animal = new Snake("python");
tvarjuka.move(40);

tvarjuka = new Fish("seledka");
tvarjuka.move(20);

