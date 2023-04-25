/**
 * @param {number} x
 * @return {number}
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 */
var reverse = function (x) {
	let y = parseInt(x.toString().split("").reverse().join(""));
	if (x < 0)
		y = - y;
	return y > 2147483647 || y < -2147483648 ? 0 : y;

};

console.log(reverse(123));