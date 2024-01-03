const arr1 = [5, 3, 2, 4, 1];
const arr2 = [6, 8, 7, 9, 0];
let arr3 = [];

// Simple Merging
console.log("Using For loop :");
for (let i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
  arr3[arr1.length + i] = arr2[i];
}
console.log(arr3);

console.log("Using While loop :");
let arr4 = [];
let i = 0;
let j = 0;
while (i < arr1.length) {
  arr4[i] = arr1[i];
  i++;
}
while (j < arr2.length) {
  arr4[i] = arr2[j];
  j++;
  i++;
}
console.log(arr4);

console.log("Using Spread operator :");
let spread = [...arr1, ...arr2];
console.log(spread);

// Sorted Merge
console.log("Sorted Merge using While loop");
const data1 = [3, 5, 7, 11, 16];
const data2 = [6, 13, 22, 25];
const data3 = [];
let a = 0;
let b = 0;
let c = 0;

while (a < data1.length && b < data2.length) {
  if (data1[a] < data2[b]) {
    data3[c] = data1[a];
    a++;
  } else {
    data3[c] = data2[b];
    b++;
  }
  c++;
}
while (a < data1.length) {
  data3[c] = data1[a];
  a++;
  c++;
}
while (b < data2.length) {
  data3[c] = data2[b];
  b++;
  c++;
}

console.log(data3);
