// Two_Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

// var twoSum = function (nums, target) {
//   for (let val1 = 0; val1 < nums.length; val1++) {
//     for (let val2 = val1 + 1; val2 < nums.length; val2++) {
//       if (nums[val1] + nums[val2] == target) return [val1, val2];
//     }
//   }
// };

var twoSum = function (nums, target) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];

    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
