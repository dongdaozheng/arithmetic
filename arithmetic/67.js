/**
 * @param {string} s
 * @return {number}
 * 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
 */
var firstUniqChar = function (s) {
	let temp = -1
	const map = new Map()

	for (const item of s) {
		map.set(item, map.get(item) ? map.get(item) + 1 : 1)
	}

	for (const [key, value] of map) {
		if (value === 1) {
			temp = key
			return s.indexOf(temp)
		}
	}

	return temp

};

console.log(firstUniqChar("leetcode"));