console.log("Curring...");

// // --- Normal Life
// function getSum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function (e) {
//           return a + b + c + d + e;
//         };
//       };
//     };
//   };
// }

// // --- Arrow life
// const getSum = (a) => (b) => (c) => (d) => (e) => a + b + c + d + e;

// console.log( getSum(5)(4)(3)(2)(1));

//// -- Infinite curring
// --- Recursion

// // Normal
// function getSum(a) {
//   return function (b) {
//     if (b) return getSum(a + b);
//     return a;
//   };
// }

// // Arrow Function
// const getSum = (a) => (b) => b ? getSum(a + b) : a;

// console.log(getSum(3)(4)(5)());

// // conversion of f(a,b,c) into f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;
const totalSum = curry(sum);
console.log(totalSum(1)(2)(3));
