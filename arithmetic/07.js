/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	return nums.reduce((a, b) => a ^ b, 0);
};

console.log(singleNumber([2, 2, 1]));