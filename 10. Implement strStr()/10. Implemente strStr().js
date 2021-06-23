/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

/*
 Implement strStr().

 Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 haystack = "hello", needle = "ll"  => 2
 haystack = "aaaaa", needle = "baa" => -2
 haystack = "hello", needle = ""    => 0
 */

// Runtime: 76 ms, faster than 85.33% of JavaScript online submissions for Implement strStr().
// Memory Usage: 39 MB, less than 50.70% of JavaScript online submissions for Implement strStr()
const strStr = (haystack, needle) => haystack.indexOf(needle);

// Runtime: 72 ms, faster than 94.28% of JavaScript online submissions for Implement strStr().
// Memory Usage: 39.9 MB, less than 28.23% of JavaScript online submissions for Implement strStr().
const strStr = (haystack, needle) => {
  if (!needle.length) return 0;

  let h = haystack.length;
  let n = needle.length;

  for (let i = 0; i <= h - n; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};
