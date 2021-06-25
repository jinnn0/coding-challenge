/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
 Given a sorted array of distinct integers and a target value, return the index if the target is found.
 If not, return the index where it would be if it were inserted in order.

 You must write an algorithm with O(log n) runtime complexity.


 nums = [1,3,5,6], target = 5   => output 2
 nums = [1,3,5,6], target = 2   => output 1
 nums = [1,3,5,6], target = 7   => output 4
 nums = [1,3,5,6], target = 0   => output 0
 nums = [0], target = 0         => output 0
 */

// Runtime: 76 ms, faster than 76.91% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 39.7 MB, less than 16.00% of JavaScript online submissions for Search Insert Position.
const searchInsert = (nums, target) => {
  const index = nums.indexOf(target);

  if (index > -1) return index;
  else {
    let i = 0;

    while (nums[i] < target) i++;
    return i;
  }
};

// Runtime: 76 ms, faster than 76.91% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 39.6 MB, less than 17.71% of JavaScript online submissions for Search Insert Position.
const searchInsert = (nums, target) => {
  let i = 0;

  while (nums[i] < target) i++;
  return i;
};

// Runtime: 76 ms, faster than 76.91% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 39.6 MB, less than 17.71% of JavaScript online submissions for Search Insert Position.
const searchInsert = (nums, target) => {
  const index = nums.findIndex((num) => num >= target);
  return index === -1 ? nums.length : index;
};

// Bimary search
// Runtime: 64 ms, faster than 99.12% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 40 MB, less than 10.03% of JavaScript online submissions for Search Insert Position.
const searchInsert = (nums, target) => {
  const index = nums.indexOf(target);
  if (index > -1) return index;

  if (nums[0] > target) {
    return 0;
  } else if (nums[nums.length - 1] < target) {
    return nums.length;
  } else {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const middle = left + Math.floor((right - left) / 2);

      if (target < nums[middle] && target > nums[middle - 1]) {
        return middle;
      } else if (nums[middle] < target) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
};
