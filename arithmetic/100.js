/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
	// return [...new Set(s.split(''))].join('').length
	s = s.split('')
	const map = new Map()
	for (const item of s) {
		map.set(item, 1)
	}
	return [...map.keys()].length;
};
console.log(minimizedStringLength('cbbd'));