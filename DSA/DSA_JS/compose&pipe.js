const compose =
  (...functions) =>
  (args) =>
    functions.reduceRight((arg, fn) => {
      console.log("Compose arg", arg);
      return fn(arg);
    }, args);

const pipe =
  (...functions) =>
  (args) =>
    functions.reduce((arg, fn) => {
      console.log("Pipe arg", arg);
      return fn(arg);
    }, args);

const add1 = (val) => {
  return val + 1;
};
const add2 = (val) => {
  return val + 2;
};
const add3 = (val) => {
  return val + 3;
};
const add4 = (val) => {
  return val + 4;
};
const add5 = (val) => {
  return val + 5;
};

const res1 = compose(add1, add2, add3, add4, add5)(5);
const res2 = pipe(add1, add2, add3, add4, add5)(2);

console.log(res1);
console.log(res2);
