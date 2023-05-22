/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 给你一个字符串 s 和一个字符串列表 wordDict 作为字典。请你判断是否可以利用字典中出现的单词拼接出 s 。
	注意：不要求字典中出现的单词全部都使用，并且字典中的单词可以重复使用。

	输入: s = "leetcode", wordDict = ["leet", "code"]
	输出: true
	解释: 返回 true 因为 "leetcode" 可以由 "leet" 和 "code" 拼接成。

	输入: s = "applepenapple", wordDict = ["apple", "pen"]
	输出: true
	解释: 返回 true 因为 "applepenapple" 可以由 "apple" "pen" "apple" 拼接成。
	注意，你可以重复使用字典中的单词。
 */
var wordBreak = function (s, wordDict) {

	const map = new Map()
	let left = 0, flag = 0

	for (let i = 0; i < wordDict.length; i++) {
		map.set(wordDict[i], i)
	}



};


wordBreak('leetcode', ["leet", "code"])