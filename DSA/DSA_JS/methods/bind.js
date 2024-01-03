var obj = { name: "Astr" };

function sayHello(age, profession) {
  return "Hello" + this.name + age + profession;
}

const bindFunction = sayHello.bind(obj);

console.log(bindFunction(25, "Frontend Developer"));
console.log(bindFunction(23, "Nalla"));

// Polyfill for Bind
let car1 = {
  color: "White",
  company: "Toyota",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") throw new Error(this + "is not a function");

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunction = purchaseCar.myBind(car1);
newFunction("$", 3000);
