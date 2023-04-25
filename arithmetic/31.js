/**
 * @param {number[]} nums
 * @return {number}
 * 
		给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数
 * 
 */
var thirdMax = function (nums) {


	nums.sort((a, b) => b - a);

	for (let i = 1, diff = 1; i < nums.length; ++i) {
		if (nums[i] !== nums[i - 1] && ++diff === 3) {
			return nums[i];
		}
	}
	return nums[0];

};

console.log(thirdMax([1, 2, 2, 5, 3, 5]));
