/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// Runtime: 72 ms, faster than 93.65% of JavaScript online submissions for Remove Element.
// Memory Usage: 39.3 MB, less than 6.97% of JavaScript online submissions for Remove Element.
const removeElement = (nums, val) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
};
