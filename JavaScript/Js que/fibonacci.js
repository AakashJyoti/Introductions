let x = 0;
let y = 1;

let givenNum = 200;
let fn = x + y;
let series = [0, 1];

while (fn < givenNum) {
  fn = x + y;
  x = y;
  y = fn;
  series.push(fn);
}

console.log(series);
