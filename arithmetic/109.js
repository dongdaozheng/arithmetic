/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	while (true) {
		if (n === 1) return true;
		if (n <= 0) return false;
		if (n > 0 && n < 1) return false;
		n = n / 2
	}
};
console.log(isPowerOfTwo(16));