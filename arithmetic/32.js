/**
 * @param {string[]} words
 * @return {string}
 * 给你一个字符串数组 words ，找出并返回数组中的 第一个回文字符串 。如果不存在满足要求的字符串，返回一个 空字符串 "" 。

回文字符串 的定义为：如果一个字符串正着读和反着读一样，那么该字符串就是一个 回文字符串 。

 */
var firstPalindrome = function (words) {

	for (let i = 0; i < words.length; ++i) {
		let reverse = words[i].split("").reverse().join("");
		if (reverse === words[i]) {
			console.log(words[i]);
			break
		}
	}


};
console.log(firstPalindrome(["def", "ghi"]));
