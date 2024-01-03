// Recursive Approach
let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let position;

function findNum(find, start, end) {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] == find) {
    position = mid;
    return mid;
  } else if (arr[mid] < find) {
    findNum(find, mid + 1, end);
  } else {
    findNum(find, start, mid - 1);
  }
}
findNum(40, 0, arr.length - 1);

console.log(position);
