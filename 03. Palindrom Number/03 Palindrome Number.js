/**
 * @param {number} x
 * @return {boolean}
 */

// runtime 220ms, faster than 62.54% of JavaScript submission

const isPalindrome = (x) => {
  if (x < 0) return false;

  const string = x.toString();
  const array = Array.from(string);
  const reverseString = array.reverse().join('');

  return string === reverseString ? true : false;
};
