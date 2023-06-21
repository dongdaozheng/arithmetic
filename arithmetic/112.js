/**
 * @param {number} n
 * @return {number}
	猜数字大小
 * 
 */
var guessNumber = function (n) {
	let left = 1, right = n
	while (left <= right) {
		const mid = Math.floor((left + (right - left) / 2))
		if (guess(mid) === 1) {
			left = mid + 1
		} else if (guess(mid) === -1) {
			right = mid - 1
		} else {
			return mid
		}
	}
	return right
};