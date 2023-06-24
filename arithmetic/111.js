/**
 * @param {number} x
 * @return {number}
	x 的平方根
 * 
 */
var mySqrt = function (x) {
	let left = 0, right = x
	while (left <= right) {
		const mid = Math.floor((left + (right - left) / 2))
		if (mid * mid < x) {
			left = mid + 1
		} else if (mid * mid > x) {
			right = mid - 1
		} else {
			return mid
		}
	}
	return right
};
console.log(mySqrt(4));