/**
 * @param {number} n
 * @return {boolean}
 */
let result = 0
var isHappy = function (n) {
	n = n.toString()
	for (const item of n) {
		result += parseInt(item) ** 2
	}
	if (result == '1') return true
	isHappy(result)
};
console.log(isHappy(19));