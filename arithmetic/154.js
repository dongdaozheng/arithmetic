/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	let index = 0
	if (strs[0] === '') return ""
	if (strs.length === 1) return strs[0]
	while (index < strs[0].length) {
		const temp = strs[0].substring(0, index + 1)
		for (const iterator of strs) {
			if (!iterator.includes(temp)) {
				return iterator.substring(0, index)
			}
		}
		index++
	}
};
console.log(longestCommonPrefix(["dog", "racecar", "car"]));