/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * 给你字符串 s 和整数 k 。

请返回字符串 s 中长度为 k 的单个子字符串中可能包含的最大元音字母数。

英文中的 元音字母 为（a, e, i, o, u）。
输入：s = "abciiidef", k = 3
输出：3
解释：子字符串 "iii" 包含 3 个元音字母。
 */
var maxVowels = function (s, k) {

	const map = new Map([['a', 1], ['e', 2], ['i', 3], ['o', 4], ['u', 5], ['A', 6], ['E', 7], ['I', 8], ['O', 9], ['U', 10]])
	let left = 0, right = k, result = 0

	while (right <= s.length) {
		const vowels = s.substring(left, right)
		let temp = 0, i = 0, j = vowels.length - 1
		while (i < j) {
			if (map.has(vowels[i])) {
				temp++
			}
			if (map.has(vowels[j])) {
				temp++
			}
			i++
			j--
			if (temp === k) return k
		}
		if (i === j && map.has(vowels[i])) {
			temp++
		}
		// for (let i = 0; i < vowels.length; i++) {
		// 	const element = vowels[i];
		// 	if (map.has(element)) {
		// 		temp++
		// 	}
		// }
		left++
		right++
		if (result < temp) {
			result = temp
		}
	}
	return result

};
console.time()
console.log(maxVowels("", 50436));
console.timeEnd()