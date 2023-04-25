/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 * 给定两个字符串 s 和 t ，它们只包含小写字母。
	字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
	请找出在 t 中被添加的字母。	
 */
var findTheDifference = function (s, t) {

	const map = new Map()
	const map1 = new Map()

	for (const item of s) {
		map.set(item, map.get(item) ? map.get(item) + 1 : 1)
	}
	for (const item of t) {
		map1.set(item, map1.get(item) ? map1.get(item) + 1 : 1)
	}

	for (const [key, value] of map1) {
		if (map.has(key)) {
			if (value !== map.get(key)) {
				return key
			}
		} else {
			return key
		}
	}
};
console.log(findTheDifference("abcd", "abcde"));