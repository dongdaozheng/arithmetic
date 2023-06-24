/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
	s = s.split('')
	let left = 0, right = s.length - 1
	while (left < right) {
		if (s[left] > s[right]) {
			s[left] = s[right]
		} else {
			s[right] = s[left]
		}
		left++
		right--
	}
	return s.join('')
};
console.log(makeSmallestPalindrome('egcf'));