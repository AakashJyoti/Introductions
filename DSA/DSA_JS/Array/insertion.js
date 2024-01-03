let arr = [1, 2, 5, 6, 7, 8, 12, 16, 33, 44, 56, 78];
let newEl = 2000;
let position = 7;

console.log("Using For Loop :-");
console.log("Before For loop", arr);
for (let index = arr.length - 1; index >= 0; index--) {
  if (index >= position) {
    arr[index + 1] = arr[index];
  }
}
arr[position] = newEl;
console.log("After For loop", arr);

let data = [1, 2, 5, 6, 7, 8, 12, 16, 33, 44, 56, 78];
console.log("Using While Loop :-");
console.log("Before While loop", data);
let i = data.length - 1;
while (i >= position) {
  data[i + 1] = data[i];
  i--;
}
data[position] = newEl;
console.log("After While loop", data);

let data2 = [1, 2, 5, 6, 7, 8, 12, 16, 33, 44, 56, 78];
data2.splice(position, 0, newEl);
console.log("Using Splice", data2);
