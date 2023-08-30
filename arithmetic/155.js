/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
	const result = [];
	backtrack(s, [], result, 0);
	return result;
	function backtrack(s, tempList, result, start) {
		if (start === s.length) {
			result.push([...tempList]);
			return;
		}
		for (let i = start; i < s.length; i++) {
			const substring = s.substring(start, i + 1)
			if (palindrome(substring)) {
				tempList.push(substring)
				backtrack(s, tempList, result, i + 1)
				tempList.pop()
			}
		}
	}
	function palindrome(s) {
		let left = 0, right = s.length - 1, result = false
		while (left < right) {
			result = s[left] === s[right] ? true : false
			if (!result) return result
			left++
			right--
		}
		if (left === right && s[left] === s[right]) result = true
		return result
	}
};
console.log(partition("aab"));
