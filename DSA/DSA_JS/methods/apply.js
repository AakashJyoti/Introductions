var obj = { name: "Astr" };

function helloForApply(h, yo) {
  return "Hello" + this.name + h + yo;
}

console.log(helloForApply.apply(obj, [10, "A"]));

// Polyfill for Apply
let car1 = {
  color: "White",
  company: "Toyota",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
  );
}

Function.prototype.myApply = function (context = {}, argsArray = []) {
  if (typeof this !== "function") throw new Error(this + "is not a function");
  if (!Array.isArray(argsArray))
    throw new Error("arguments should be provided in an Array");

  context.fn = this;
  context.fn(...argsArray);
};

// purchaseCar.apply(car1, ["$", 3000]);
purchaseCar.myApply(car1, ["$", 3000]);
