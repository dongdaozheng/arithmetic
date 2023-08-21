/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
	const result = []
	s = s.split('')
	function backtrack(result, s, tempList, start) {
		result.push([...tempList])
		for (let i = start; i < s.length; i++) {
			if (s[i] === s[i - 1] && i > start) continue
			tempList.push(s[i])
			backtrack(result, s, tempList, i + 1)
			tempList.pop()
		}
	}
	backtrack(result, s, [], 0)
	return result
};
console.log(numDecodings('226'));