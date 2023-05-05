/**
 * @param {string} s
 * @return {string}
 * 给你一个字符串 s ，根据下述规则反转字符串：

所有非英文字母保留在原有位置。
所有英文字母（小写或大写）位置反转。
返回反转后的 s 。
 */
var reverseOnlyLetters = function (s) {
	const map = new Map()
	if (/[a-zA-Z]/g.test(s)) {
		for (let index = 0; index < s.length; index++) {
			if (/[^a-zA-Z]/.test(s[index])) {
				map.set(index, s[index])
			}
		}
		s = s.replace(/[^a-zA-Z]/g, '').split('')
		let temp
		for (let left = 0, right = s.length - 1; left < right; left++, right--) {
			temp = s[left]
			s[left] = s[right]
			s[right] = temp
		}

		for (const [key, value] of map) {
			s.splice(key, 0, value)
		}
		return s.join('')
	} else {
		return s
	}


};

console.log(reverseOnlyLetters("z<*zj"));