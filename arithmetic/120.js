/**
 * @param {number[]} nums
 * @return {number}
 * 给你一个整数数组 nums ，数组由 不同正整数 组成，
 * 请你找出并返回数组中 任一 既不是 最小值 也不是 最大值 的数字，如果不存在这样的数字，返回 -1 。
	返回所选整数。
 */
var findNonMinOrMax = function (nums) {
	const result = nums.filter(item => item !== Math.max(...nums)).filter(item => item !== Math.min(...nums))
	if (!result.length) {
		return -1
	}
	return result[0]
};
console.log(findNonMinOrMax([3, 2, 1, 4]));