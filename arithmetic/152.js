/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
	s = s.split('')
	const map = new Map()
	for (const item of s) {
		map.set(item, map.get(item) + 1 || 1)
		if (map.get(item) === 2) return item
	}
};
console.log(repeatedCharacter('abccbaacz'));