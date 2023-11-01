/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
	// let result = 0
	// for (const iterator of coins) {
	// 	result += iterator % 2 + Math.floor(iterator / 2)
	// }
	// return result
	return coins.reduce((a, b) => {
		return a + Math.floor(b / 2) + (b % 2)
	}, 0)
};
console.log(minCount([2, 3, 10]));

