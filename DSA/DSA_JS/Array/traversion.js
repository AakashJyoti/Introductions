const arr1 = [2, 3, 4, 5, 6];

console.log(arr1);

console.log("Using For Loop");
for (let index = 0; index < arr1.length; index++) {
  const element = arr1[index];
  console.log(element);
}

console.log("Using While Loop");
let whileIndex = 0;
while (whileIndex < arr1.length) {
  console.log(arr1[whileIndex]);
  whileIndex++;
}

console.log("Using Do-While Loop");
let doIndex = 0;
do {
  console.log(arr1[doIndex]);
  doIndex++;
} while (doIndex < arr1.length);

let specificIndex = 4;
console.log(`Array at ${specificIndex} is ${arr1[specificIndex]}`);
