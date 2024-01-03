class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {};
  }

  // Instance Method
  draw() {
    console.log("draw");
  }

  // static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const c = new Circle(1);
console.log(c);
// Circle.parse();
const circle = Circle.parse('{"radius": 10}');
console.log(circle);
