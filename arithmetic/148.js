/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	const map = new Map()
	for (const item of magazine) {
		map.set(item, map.get(item) + 1 || 1)
	}
	for (const iterator of ransomNote) {
		if (!map.has(iterator)) return false
		map.set(iterator, map.get(iterator) - 1)
	}
	for (const [key, value] of map) {
		if (value < 0) return false
	}
	return true

};
console.log(canConstruct('aa', 'aab'));