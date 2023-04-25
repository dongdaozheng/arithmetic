/**
 * @param {string} digits
 * @return {string[]}
 * 
 * 
给定一个仅包含数字 2 - 9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */
var letterCombinations = function (digits) {
	if (!digits) {
		return []
	}
	const map = new Map([['2', 'abc'], ['3', 'def'], ['4', 'ghi'], ['5', 'jkl'], ['6', 'mno'], ['7', 'pqrs'], ['8', 'tuv'], ['9', 'wxzy']])

	const queue = [];

	for (let i = 0; i < digits.length; i++) {
		let curStr = map.get(digits[i])

		console.log(curStr);



	}

	return queue
}
// ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]

console.log(letterCombinations('2345'));
