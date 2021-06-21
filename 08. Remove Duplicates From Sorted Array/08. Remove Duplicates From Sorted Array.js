/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 112 ms, faster than 29.24% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 42.1 MB, less than 8.96% of JavaScript online submissions for Remove Duplicates from Sorted Array.

const removeDuplicates = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};

// Runtime: 100 ms, faster than 53.31% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 40.7 MB, less than 82.44% of JavaScript online submissions for Remove Duplicates from Sorted Array

const removeDuplicates = (nums) => {
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

// Runtime: 80 ms, faster than 98.22% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 41.4 MB, less than 15.15% of JavaScript online submissions for Remove Duplicates from Sorted Array.

const removeDuplicates = (nums) => {
  let index = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      nums[index++] = nums[i + 1];
    }
  }

  return index;
};
