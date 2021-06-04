/**
 * @param {string} s
 * @return {number}
 */

/*
 input s = "III"   => 3
 input s = "IV"    => 4
 input s = "IX"    => 9
 input s = "XII"   => 12
 input s = "XXVII" => 27
 input s = "LVIII" => 58 (L = 50, V= 5, III = 3)
 input s = "MCMXCIV" => 1994 (M = 1000, CM = 900, XC = 90 and IV = 4)
*/

/*
 Roman numerals are usually written largest to smallest from left to right.
 However, the numeral for four is not IIII. Instead, the number four is written as IV.
 Because the one is before the five we subtract it making four.
 There are six instances that the same principle applies to

 I can be placed before V (5) and X (10) to make 4 and 9.
 X can be placed before L (50) and C (100) to make 40 and 90.
 C can be placed before D (500) and M (1000) to make 400 and 900.
*/

// Runtime: 244 ms, faster than 9.91% of JavaScript online submissions for Roman to Integer.
// Memory Usage: 46.4 MB, less than 17.78% of JavaScript online submissions for Roman to Integer.

const s = 'MCMXCIV';

const romanToInt = (s) => {
  const arr = s.split('');
  const object = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let integer = 0;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const next = arr[i + 1];

    if (object[current] < object[next]) {
      integer -= object[current];
    } else {
      integer += object[current];
    }
  }

  return integer;
};
