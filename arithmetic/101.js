// 给你一个下标从 0 开始、长度为 n 的整数排列 nums 。
// 如果排列的第一个数字等于 1 且最后一个数字等于 n ，则称其为 半有序排列 。你可以执行多次下述操作，直到将 nums 变成一个 半有序排列 ：
// 选择 nums 中相邻的两个元素，然后交换它们。
// 返回使 nums 变成 半有序排列 所需的最小操作次数。
// 排列 是一个长度为 n 的整数序列，其中包含从 1 到 n 的每个数字恰好一次。
/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
	let i = 0, j = 0
	i = nums.findIndex((item, index) => item === 1)
	j = nums.findIndex((item, index) => item === nums.length)
	if (i == 0 && j == nums.length - 1) return 0
	else if (i < j) return i + nums.length - (j + 1)
	return i + nums.length - (j + 1) - 1


};
console.log(semiOrderedPermutation([2, 3, 1]));