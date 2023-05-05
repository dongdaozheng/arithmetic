/**
 * @param {string} s
 * @return {string}
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
	元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。

 */
var reverseVowels = function (s) {
	const map = new Map([['a', 1], ['e', 2], ['i', 3], ['o', 4], ['u', 5], ['A', 6], ['E', 7], ['I', 8], ['O', 9], ['U', 10]])
	const strMap = new Map()
	let temp = 0

	let values = []
	s = s.split('')
	for (let index = 0; index < s.length; index++) {
		if (map.has(s[index])) {
			strMap.set(index, s[index])
			s[index] = ''
		}
	}
	values.push(...strMap.values())
	values = values.reverse()

	for (let index = 0; index < s.length; index++) {
		if (!s[index]) {
			s[index] = values[temp]
			temp++
		}
	}
	s = s.join('')
	return s
};
console.log(reverseVowels('leetcode'));
