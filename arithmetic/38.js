/**
 * @param {string[]} words
 * @return {string[]}
	给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（ 包括重复字符），
	并以数组形式返回。你可以按 任意顺序 返回答案
 */
var commonChars = function (words) {
	let ans = []
	let word = words[0]
	let slen = word.length
	for (let s of word) {
		if (words.every(m => m.includes(s))) {
			words = words.map(m => m.replace(s, ''))
			ans.push(s)
		}
	}
	return ans

};

console.log(commonChars(["cool", "lock", "cook"]));