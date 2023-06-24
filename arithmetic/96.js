/**
 * @param {string} s
 * @return {number}
 * 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。
	在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串

 */
var longestPalindrome = function (s) {
	let ans = 0, mark = 0
	const map = new Map()
	for (const iterator of s) {
		map.set(iterator, map.has(iterator) ? map.get(iterator) + 1 : 1)
	}
	for (const [key, value] of map) {
		if (value % 2 === 0) ans += value
		else {
			ans += value > 1 ? value - 1 : 0
			mark++
		}
	}
	return mark ? ans + 1 : ans
};
console.log(longestPalindrome("aaaaaccc"));