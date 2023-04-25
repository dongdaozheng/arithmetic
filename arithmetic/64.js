/**
 * @param {number} num
 * @return {number}
 * 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。
 */
var addDigits = function (num) {

	num == 0 ? num : (num - 1) % 9 + 1

};
console.log(addDigits(138));