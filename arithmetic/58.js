/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。

如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。

每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。

 */
var isIsomorphic = function (s, t) {
	s = s.split('')
	t = t.split('')
	let result = false
	const map = new Map()

	if ([...new Set(s)].length !== [...new Set(t)].length || s.length !== t.length) {
		return false
	}

	for (let i = 0; i < s.length; i++) {
		if (!map.get(s[i])) {
			map.set(s[i], t[i])
			result = true
		} else {
			if (map.get(s[i]) !== t[i]) {
				result = false
				break
			}
			result = true
		}
	}
	return result


};
console.log(isIsomorphic("abb", "acd"));