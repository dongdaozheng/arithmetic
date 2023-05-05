/**
 * @param {string[]} strs
 * @return {number}
 * 给你由 n 个小写字母字符串组成的数组 strs，其中每个字符串长度相等。
这些字符串可以每个一行，排成一个网格。例如，strs = ["abc", "bce", "cae"] 可以排列为：
abc
bce
cae
你需要找出并删除 不是按字典序升序排列的 列。
在上面的例子（下标从 0 开始）中，列 0（'a', 'b', 'c'）和列 2（'c', 'e', 'e'）都是按升序排列的，而列 1（'b', 'c', 'a'）不是，所以要删除列 1 。
返回你需要删除的列数。
 */
var minDeletionSize = function (strs) {
	let temp, n = 0, result = [], flag = 0, code
	while (n < strs[0].length) {
		temp = []
		flag = 0
		for (let index = 0; index < strs.length; index++) {
			temp.push(strs[index].charAt(n))
		}
		for (let index = 0; index < temp.length; index++) {
			code = temp[index].charCodeAt(0)
			if (flag < code) {
				flag = code
			} else {
				return n
			}
		}
		n++
	}
	return 0
};
console.log(minDeletionSize(["zyx", "wvu", "tsr"]));