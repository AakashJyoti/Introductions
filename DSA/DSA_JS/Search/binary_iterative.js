// Iterative Approach
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let find = 70;
let start = 0;
let end = arr.length - 1;
let position;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == find) {
    position = mid;
    break;
  } else if (arr[mid] < find) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
  // break;
}

console.log("position", position);
