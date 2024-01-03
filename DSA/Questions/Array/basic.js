console.log("Basic file");

let person = {
  name: "Aakash",
  age: 25,
};

let arr = ["apple", "banana", "cherry"];
const nums = [1, 2, 3, 4, 5];
// console.log(arr[arr.length - 1])

// to add and remove data at the end of the array == push and pop

arr.push("Orange");
// console.log(arr)

arr.pop();
arr.pop();
// console.log(arr)

// to add and remove data at the start of the array == shift and unshift
arr.unshift("orange");
// console.log(arr)
arr.shift();
// console.log(arr)

// Loops in Array
// for loop
for (let i = 0; i < arr.length; i++) {
  // console.log(arr[i])
}

// while loop
let i = 0;
while (i < arr.length) {
  // console.log(arr[i]);
  i++;
}

// Inbuld loop methods
const numbers = [1, 2, 3, 4, 5];

// Map
numbers.map((item, index, array) => {
  return item + 5;
});

// Filter
numbers.filter((item, index, array) => {
  return item > 3;
});

// Reduce
numbers.reduce((acc, item, index, array) => {
  return acc + item;
}, 0);

// Some
numbers.some((item, index, array) => {
  return item > 3;
});

// Every
numbers.every((item, index, array) => {
  return item >= 1;
});

// Find
numbers.find((item, index, array) => {
  return item > 3;
});
// console.log(newNums);

// Findindex
const newVal = nums.findIndex((item) => item === 3);
// console.log(newVal)

// Spread and Rest Operator
// const nums = [1, 2, 3, 4, 5];
const newNums = [6, 7, 8, 9];
const w = [nums, newNums];
const finalNums = [...nums, ...newNums];
// console.log({finalNums, w})

function sum(...numbers) {
  return numbers;
}
// console.log(sum(nums, newNums))

// More Array method
// Concat
nums.concat(newNums, arr);

// Slice
nums.slice(1, 4);

// Splice
arr.splice(1, 2, "orange");

// Fill
nums.fill(7, 2);

// Flat
// const numbers = [1, [2, 3], [[4, 5], 6]];
// const newVal = numbers.flat(2)
console.log(newVal);

// reverse
const newRevVal = nums.reverse();
// console.log(newRevVal)

// sort
const unsort = [5, 3, 2, 4, 1];
const revsort = unsort.sort((a, b) => b - a);
const newSort = unsort.sort((a, b) => a - b);
// console.log({newSort, revsort})
