/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律

 */
var wordPattern = function (pattern, s) {

	s = s.split(' ')

	pattern = pattern.split('')
	if ([...new Set(s)].length !== [...new Set(pattern)].length || s.length !== pattern.length) {
		return false
	}

	const map = new Map()


	let result = false

	for (let i = 0; i < pattern.length; i++) {
		if (!map.get(pattern[i])) {
			map.set(pattern[i], s[i])
			result = true
		} else {
			if (map.get(pattern[i]) !== s[i]) {
				result = false
				break
			} else {
				result = true
			}
		}
	}



	return result
};
console.log(wordPattern("aba", "dog cat cat"));