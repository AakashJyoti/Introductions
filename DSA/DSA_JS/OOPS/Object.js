// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
const newCircle2 = new Circle(1);

// Functions are Objects
const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
  this.draw = function () {
    console.log("draw");
  }
`
);
const newCircle1 = new Circle1(2);

// Object properties
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
Circle.call({}, 1);

const newCircle = new Circle(1);
// newCircle.draw();

// Value ans reference type
let x = 10;
let y = x;
x = 20;

// console.log(x);
// console.log(y);

let one = { value: 10 };
let two = one;
one.value = 20;

// console.log(one);
// console.log(two);

let number = 10;
function increase(number) {
  number = number++;
}
increase(number);
// console.log(number);

let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}
increase(obj);
// console.log(obj);

// Adding and removing values
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}
const circleD = new Circle(10);
circleD.location = { x: 1 };
// circleD["location"] = { x: 1 };
// console.log(circleD);

// Enumerating Properties
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw");
  };
}
const cir = new Circle(10);

for (const key in cir) {
  if (typeof cir[key] !== "function") {
    // console.log(key, cir[key]);
  }
}

let keys = Object.keys(cir);
// console.log(keys);

if ("radius" in cir) {
  // console.log("Circle has the radius");
}

// Abstraction : Private variable
function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  let computeOPtimumLocation = function () {
    console.log(defaultLocation);
  };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    computeOPtimumLocation();
    console.log("Draw");
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid Location");
      }
      defaultLocation = value;
    },
  });
}
const cir1 = new Circle(10);
let a = cir1.getDefaultLocation();
cir.defaultLocation = { x: 1, y: 2 };
let b = cir.defaultLocation;
console.log(a);
console.log(b);
