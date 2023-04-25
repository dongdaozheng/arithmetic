/**
 * @param {string[]} strs
 * @return {string}
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。
		如果不存在公共前缀，返回空字符串 ""。
 */
var longestCommonPrefix = function (strs) {
	let n = 0
	let flag = false
	let result = ''
	if (strs.length === 1) {
		return strs[0]
	}
	while (n < strs[0].length) {
		for (let i = 1; i < strs.length; i++) {
			const el = strs[i]
			if (el.charAt(n) !== strs[0].charAt(n)) {
				flag = true
				break
			}
		}
		if (flag) break
		n++
	}
	result = strs[0].substring(0, n)
	return result
}
console.log(longestCommonPrefix(["fl", "flow", "flight"]));