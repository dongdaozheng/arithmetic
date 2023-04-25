/**
 * @param {string} s
 * @return {number}
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 */
var lengthOfLongestSubstring = function (str) {

	if (str.length <= 1) { return str.length }
	let left = 0
	let right = 1
	let max = 0
	let temp
	while (right < str.length) {
		temp = str.substring(left, right)
		if (temp.indexOf(str.charAt(right)) > -1) {
			left++
			continue
		} else {
			right++
		}
		if (right - left > max) { max = right - left }
	}
	return max


};
console.log(lengthOfLongestSubstring("pwwkew"));