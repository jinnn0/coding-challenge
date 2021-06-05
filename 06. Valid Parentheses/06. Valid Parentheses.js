/**
 * @param {string} s
 * @return {boolean}
 */

/*
 s consists of parentheses only '()[]{}', determine if the input string is valid.

 An input string is valid if:
 - Open brackets must be closed by the same type of brackets.
 - Open brackets must be closed in the correct order.

 Input s = "()"      => output : true
 Input s = "()[]{}"  => output : true
 Input s = "(]"      => output : false
 Input s = "([)]"    => output : false
 Input s = "{[]}"    => output : true
 */

// Runtime: 76 ms, faster than 86.35% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 38.5 MB, less than 90.90% of JavaScript online submissions for Valid Parentheses.
const isValid = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const character = s[i];
    if (character === '(' || character === '{' || character === '[') {
      stack.push(character);
    } else if (
      (character === ')' && stack[stack.length - 1] === '(') ||
      (character === '}' && stack[stack.length - 1] === '{') ||
      (character === ']' && stack[stack.length - 1] === '[')
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid(s));
