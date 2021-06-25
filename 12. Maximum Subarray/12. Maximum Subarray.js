/**
 * @param {number[]} nums
 * @return {number}
 */

/*
 Given an integer array nums, find the contiguous subarray (containing at least one number)
 which has the largest sum and return its sum.

 nums = [-2,1,-3,4,-1,2,1,-5,4] => output : 6, [4,-1,2,1]
 nums = [5,4,-1,7,8]            => output : 23
 nums = [1]                     => output : 1

 How to approach ?
  - Kadane's Algorithm

  1. For each element in the array, ask "what's the largest sum up to this element?"
  2. And see if adding current element to the existing sum is bigger than its value
  3. Keep the bigger one, assign the value to the current element
     ie. nums[i] = Max(current value, current value + currnet sum)
  4. Every iteration, also compare the current sum to the maximum sum
  5. Return the largest sum
*/

// Runtime: 80 ms, faster than 84.86% of JavaScript online submissions for Maximum Subarray.
// Memory Usage: 40.2 MB, less than 22.96% of JavaScript online submissions for Maximum Subarray.
const maxSubArray = (nums) => {
  let maximumSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
    maximumSum = Math.max(nums[i], maximumSum);
  }

  return maximumSum;
};

console.log(maxSubArray(nums));
