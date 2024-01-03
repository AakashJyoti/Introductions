// ---- Q-2 Rotate Array by K number ----
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input : nums = [1,2,3,4,5], K = 2 --- >>> Output : [4,5,1,2,3]

const a = [1, 2, 3, 4, 5, 6, 7, 8];
const k = 9;

const rotateArray = (nums, k) => {
  const size = nums.length;
  if (k > size) k = k % size;
  const rotated = nums.splice(size - k, size); // O(n)
  nums.unshift(...rotated); // O(n)
  return nums;
};

console.log(rotateArray(a, k));
// ----------------------
// Time Complexity : O(n)

const rotateArrayOptimized = (nums, k) => {
  const size = nums.length;
  if (k > size) k = k % size;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, size - 1);
  return nums;
};

const reverse = (nums, left, right) => {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
};

console.log(rotateArrayOptimized(a, k));
// ----------------------
// Time Complexity : O(n)
// Space Complexity : O(1)
