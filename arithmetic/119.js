/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
	const map = new Map()
	for (const item of s) {
		map.set(item, (map.get(item) || 0) + 1)
	}
	const result = [...new Set([...map.values()])]
	if (result.length === 1) return true
	return false
};
console.log(areOccurrencesEqual('abacbc'));