/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	let left = 0
	let right = s.length - 1
	let temp = 0
	while (left < right) {
		temp = s[left]
		s[left] = s[right]
		s[right] = temp
		left++
		right--
	}
	if (left === right) {
		s[left] = s[right]
	}
	return s
};

console.log(reverseString(["H", "a", "n", "n", "a", "h"]));