// ---- Q-1 Second largest number ----
// Given an array of size N, print second largest
// distinct element for an array.

// Input : [12, 35, 1, 10, 34, 1] --- >>> Output : 34

// const secondLargest = (arr) => {
//   const unique = Array.from(new Set(arr)) // O(n)
//   unique.sort((a, b) => b - a); // O(n log n)

//   if (unique.length >= 2) {
//     return unique[1];
//   } else {
//     return -1
//   }
// }
// let a = secondLargest([12, 35, 1, 10, 34, 1, 35])
// console.log(a)

// -------------------------
//Time complexity O(nlogn)

const secondLargestOptimized = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

let a = secondLargestOptimized([12, 35, 1, 10, 34, 1, 35]);
console.log(a);

// ----------------------
// time complexity O(n)
// space complexity O(1)
