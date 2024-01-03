// ---- Q-3 Rotate Array by K number ----
// Given an Integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each uniqe element appear only
// once. The relative order of element should be kept the same.
// Then return the number of unique elements in nums.

// Input : nums = [1,1,2] --- >>> Output : [1,2,_]
// Input : nums = [0,0,1,1,1,1,2,2,2,3,3,4] --- >>> Output : [0,1,2,3,4,_,_,_,_,_,_,_]

let arr = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

const removeDuplicates = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
      i--;
    }
  }
  return arr.length;
};

console.log(removeDuplicates(arr));

// ------------------------
// Time complexity : O(n)
// Space complexity : O(1)

// --- Two pointer approach ---
const removeDuplicatesNew = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(removeDuplicatesNew(arr));
// -----------------------------
// Time complexity : O(n)
// Space complexity : O(1)
