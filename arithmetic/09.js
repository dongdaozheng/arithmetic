/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

	x = x.toString();

	let num = false

	if (x.length === 1) {
		num = true
	}

	for (let i = 0, j = x.length - 1; i < j; i++, j--) {
		if (x[i] === x[j]) {
			num = true
		} else {
			num = false
			break
		}
	}
	return num

	// return String(x) === String(x).split('').reverse().join('')
};

console.log(isPalindrome(121));