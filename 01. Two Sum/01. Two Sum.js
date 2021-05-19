/**
 * 01. Two Sum
 * LeetCode Q1


 * Given an array of integers nums and an integer target,
   return indices of the two numbers such that they add up to target.

   You may assume that each input would have exactly one solution,
   and you may not use the same element twice.

   You can return the answer in any order.
 */

const nums = [11, 2, 15, 7];
const target = 18;

/**
 * Approach 01
 * 1. Use one loop
 * 2. Keep track of all the numbers that you've already loked at
 * 3. Find the number that you need
 */
const twoSum = function (nums, target) {
  const prevValues = {};

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const neededValue = target - currentValue;
    const indexTwo = prevValues[neededValue];

    console.log('currentValue: ', currentValue, 'indexTwo: ', indexTwo, prevValues);

    if (indexTwo != null) {
      return [indexTwo, i];
    } else {
      prevValues[currentValue] = i;
    }
  }
};

console.log(twoSum(nums, target));

/**
 * Approach 02
 * Using two loops -> It's a big O notation of n square
 * Thus the execution may becomes really slow as the array gets larger
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum(nums, target));
