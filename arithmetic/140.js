/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
	const keyboardHash = new Map([
		['q', 1], ['w', 1], ['e', 1], ['r', 1], ['t', 1], ['y', 1], ['u', 1], ['i', 1], ['o', 1], ['p', 1],
		['a', 2], ['s', 2], ['d', 2], ['f', 2], ['g', 2], ['h', 2], ['j', 2], ['k', 2], ['l', 2],
		['z', 3], ['x', 3], ['c', 3], ['v', 3], ['b', 3], ['n', 3], ['m', 3]
	]);
	const result = []

	for (let i = 0; i < words.length; i++) {
		const word = words[i], tempList = []
		let left = 0, right = word.length - 1
		while (left < right) {
			tempList.push(keyboardHash.get(word[left].toLocaleLowerCase()))
			tempList.push(keyboardHash.get(word[right].toLocaleLowerCase()))
			left++
			right--
		}
		if (left === right) {
			tempList.push(keyboardHash.get(word[left]))
		}
		if (word.length === tempList.length && new Set(tempList).size === 1) {
			result.push(word)
		}

	}
	return result


};
console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));