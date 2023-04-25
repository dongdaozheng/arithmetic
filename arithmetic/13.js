/**
 * @param {string[]} strs
 * @return {string}
 * 
 * 编写一个函数来查找字符串数组中的最长公共前缀。
		如果不存在公共前缀，返回空字符串 ""。
 */
var longestCommonPrefix = function (strs) {

	let flag = false
	let subIndex = 1
	let s = ''

	while (strs[0].length >= subIndex) {
		for (let index = 0; index < strs.length; index++) {
			let s = strs[index].substring(0, subIndex)
			if (strs[0].substring(0, subIndex) !== s) {
				flag = true
				break
			}
		}
		if (flag) break

		s = strs[0].substring(0, subIndex)
		subIndex++;
	}

	return s

};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));