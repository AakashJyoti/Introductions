function Shape(color) {
  this.color = color;
}

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype); // -- change Circle object base to Shape prototype
  Child.prototype.constructor = Child;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};
extend(Circle, Shape);

function Circle(radius, color) {
  Shape.call(this, color); // Calling a super constructor
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log("draw");
};

function Square(size) {
  this.size = size;
}
extend(Square, Shape);
// Square.prototype = Object.create(Shape.prototype); // -- change Circle object base to Shape prototype
// Square.prototype.constructor = Square;

const c = new Circle(1, "red");
const s = new Square(10);

// console.log(c.__proto__.__proto__);
// c.draw();
// c.duplicate();

console.log(c);
console.log(s);
