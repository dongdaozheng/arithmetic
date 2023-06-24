/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
	const map = new Map()
	let result = 0
	for (const item of s) {
		map.set(item, map.get(item) + 1 || 1)
	}
	for (const [key, value] of map) {
		if (value >= k) {
			result += value
		}
	}
	return result
};

console.log(longestSubstring("ababbc", 2));