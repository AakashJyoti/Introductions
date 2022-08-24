console.log("Factorial...");

let num = 3;
// let factorial;

// for (let i = num; i > 1; ) {
//   i = i - 1;
//   factorial = num * i;
//   num = factorial;
// }

for (var factorial = 1; num > 1; num--) {
  factorial = factorial * num;
}

console.log(factorial);
