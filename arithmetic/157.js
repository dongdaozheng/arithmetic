/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
  const result = [];
  backtrack(s, '', 0, result);
  return result;

  function backtrack(s, current, index, result) {
    if (index === s.length) {
      result.push(current);
      return;
    }
    const char = s[index];
    if (isLetter(char)) {
      backtrack(s, current + char.toLowerCase(), index + 1, result);
      backtrack(s, current + char.toUpperCase(), index + 1, result);
    } else {
      backtrack(s, current + char, index + 1, result);
    }
  }

  function isLetter(char) {
    return /[a-zA-Z]/.test(char);
  }
};
console.log(letterCasePermutation('a12c'));
