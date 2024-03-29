// Ques 4 - Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Input : [-2, 1, -3, 4, -1, 2, 1, -5, 4] --->>> Output : 6, [4,-1,2,1]
// Input : [5,4,-1,7,8] --->>> Output : 23, [5,4,-1,7,8]

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = (nums) => {
  let maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if (currentSum > maxSum) maxSum = currentSum;
    }
  }
  return maxSum;
};

console.log(maxSubArray(nums));
