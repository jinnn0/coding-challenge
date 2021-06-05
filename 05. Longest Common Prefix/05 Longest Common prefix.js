 /**
 * @param {string[]} strs
 * @return {string}
 */

 /*
  Find the longest common charaters that the strings in the array start with

  ["dog","racecar","car"] => ""
  ["flower","flow","flight"] => "fl"
  [""] => ""
  ["",""] => ""
  */

  /*
  Constraints:

  1 <= strs.length <= 200
  0 <= strs[i].length <= 200
  strs[i] consists of only lower-case English letters.
   */

  //  Runtime: 84 ms, faster than 71.45% of JavaScript online submissions for Longest Common Prefix.
  //  Memory Usage: 38.7 MB, less than 91.00% of JavaScript online submissions for Longest Common Prefix.


const longestCommonPrefix = (strs) => {
    let prefix = ""

    for(let i = 0; i < strs[0].length; i++){
        const character = strs[0][i]

        for(let j = 1; j < strs.length; j++){
            // Do these words start with the same character ?
            // If not, return a current longest prefix
            if(strs[j][i] !== character) return prefix 
        }

        // If yes, add it to the prefix
        prefix += character
    }

    return prefix
}

console.log(longestCommonPrefix(strs))

