/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

 */
var isAnagram = function (s, t) {
	let result = false
	if (s.length !== t.length) return result
	const map = new Map()
	for (let item of s) {
		map.set(item, map.get(item) ? map.get(item) + 1 : 1)
	}
	const maps = new Map()
	for (let item of t) {
		maps.set(item, maps.get(item) ? maps.get(item) + 1 : 1)
	}

	for (let index = 0; index < t.length; index++) {
		const element = t[index];

		if (!map.has(element) || maps.get(element) !== map.get(element)) {
			result = false
			break
		}

		result = true

	}

	return result

};
console.log(isAnagram("anagtam", "nbgbram"));