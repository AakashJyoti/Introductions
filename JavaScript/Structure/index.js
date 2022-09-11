// --- Structures ---
// Array
// Stack
// Queue
// Tree
// Graph

// --- operations ---
// traversing
// insertion
// deletion
// searching
// sorting
// merge

// // Array
// push()
// pop()
// shift()
// unshiift()
// short()
// reverse()
// (...array)
// concat(arr1, arr2)
// splice()
// slice()
// new Set()
// map(()=>{})
// forEach(){}
// reduce(() => {})
// filter(() => {})
// join()
// includes()
// toString()

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newval = 20;
let position = 4;

console.log(data);

//// --- insert element in perticular location

// for (let i = data.length - 1; i >= 0; i--) {
//   if (i >= position) {
//     data[i + 1] = data[i];
//     if (i === position) {
//       data[i] = newval;
//     }
//   }
// }

// console.warn(data);

//// --- delete element in perticular location

// for (let i = position; i < data.length - 1; i++) {
//   data[i] = data[i + 1];
// }
// data.length = data.length - 1;

// console.log(data);
// console.log(data.splice(2, 2));
// console.log(data)

//// --- Search Element in an array

// let item = 5;
// let index;

// for (let i = 0; i < data.length - 1; i++) {
//   if (data[i] === item) {
//     index = i;
//     break;
//   }
// }

// console.log(index);

// console.log(data.indexOf(item));

// // --- Merge two array

// console.log([...data, ...data1]);

