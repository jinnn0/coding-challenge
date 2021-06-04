/**
 * @param {number} x
 * @return {boolean}
 */

/*
 Input: x = 121
 Output: true
	
 Input: x = -121
 Output: false
 Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.	
*/


// runtime 220ms, faster than 62.54% of JavaScript submission

const isPalindrome = (x) => {
  if (x < 0) return false;

  const string = x.toString();
  const array = Array.from(string);
  const reverseString = array.reverse().join('');

  return string === reverseString ? true : false;
};
