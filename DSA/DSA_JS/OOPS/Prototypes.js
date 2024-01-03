// Inheritance
// Classical and Prototypical Inheritance

let x = {};
let y = {};

// console.log(x.__proto__.constructor);
// console.log(x.toString());
// console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));
// -- only root object don't have prototype --
// -- Object created by given constructor have the same prototype -- 

let person = { name: "Astr" };

for (const key in person) {
  // console.log(key);
}
// console.log(Object.keys(person));
let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");

// console.log("objectBase", objectBase);
// console.log("propertyDescriptor", descriptor);

Object.defineProperty(person, "name", {
  writable: false, // -- controls object's writable ability --
  enumerable: false, // -- controls object's visible ability --
  configurable: false, // -- controls delectability of property -- 
});

person.name = "Jake";
delete person.name;

// console.log(person);

// let array = [];
// console.log(array.__proto__);
// console.log(Array.prototype);

function Circle(radius) {
  // Instance Members
  this.radius = radius;
  this.move = function () {
    this.draw();
    console.log("Move");
  };
}

// Prototype Members
Circle.prototype.draw = function () {
  // this.move();
  console.log("draw");
};

Circle.prototype.toString = function () {
  return console.log("Updating String Function");
};

const c1 = new Circle(1);
const c2 = new Circle(1);

// console.log(c1.__proto__.draw());
// console.log(c2.__proto__.draw());
// c1.draw();
// c2.draw();
// c1.move();
// c2.move();
// c1.toString();
// c2.toString();

// returns only instance keys
console.log(Object.keys(c1));
// returns all instance and prototype keys
for (const key in c1) console.log(key);

// c1.hasOwnProperty('key) -- to check is property instance (true) --

//  -- Don't modify objects you don't own --
