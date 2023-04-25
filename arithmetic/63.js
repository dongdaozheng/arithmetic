/**
 * @param {string} s
 * @return {boolean}
 * 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

字母和数字都属于字母数字字符。

给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

 */
var isPalindrome = function (s) {

	s = s.replace(/[^a-zA-Z0-9\^s]/g, "").toLowerCase();

	let result = false

	let left = 0
	let right = s.length - 1


	if (s === '') {
		return true
	}


	if (left === right && s[left] === s[right]) {
		result = true
	}

	while (left < right) {
		if (s[left] === s[right]) {
			result = true
		} else {
			return result = false
		}
		left++
		right--
	}

	return result


};

console.log(isPalindrome("0p"));