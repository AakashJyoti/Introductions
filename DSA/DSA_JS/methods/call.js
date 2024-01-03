var obj = { name: "Astr" };

function sayHello(yo) {
  return "Hello " + this.name + yo;
}

const sayName = () => this.name;

console.log(sayHello.call(obj, 70)); // "Astr"
console.log(sayName.call(obj, 70)); // undefined

// Polyfill for Call
let car1 = {
  color: "White",
  company: "Toyota",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(this + "is not a function");

  context.fn = this;
  context.fn(...args);
};

// purchaseCar.call(car1, "$", 3000);
purchaseCar.myCall(car1, "$", 3000);
