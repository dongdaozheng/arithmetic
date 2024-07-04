/**
 * @param {string} s
 * @return {number}
 * 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。
	在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串

 */
var longestPalindrome = function (s) {
  if (!s || s.length < 1) return '';

  let len = 0;
  result = null;
  for (let index = 0; index < s.length; index++) {
    const sub = s[index];
    let right = s.length;
    while (right > index) {
      const subString = s.substring(index, right);
      if (subString.length < len) break;
      if (isPalindrome(subString)) {
        len = subString.length;
        result = subString;
      }
      right--;
    }
  }
  return result;
};

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(longestPalindrome('cbbd'));
