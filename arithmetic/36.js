/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 */
var sortedSquares = function (nums) {

	let left = 0;
	let right = nums.length - 1;

	while (left < right) {
		nums[left] *= nums[left]
		nums[right] *= nums[right]
		left++
		right--
	}
	if (left === right) {
		nums[left] *= nums[left]
	}

	// for (let i = 0, j = nums.length - 1; i <= j; i++, j--) {
	// 	if (i === j) {
	// 		nums[i] *= nums[i]
	// 	} else {
	// 		nums[i] *= nums[i]
	// 		nums[j] *= nums[j]
	// 	}
	// }

	nums.sort((a, b) => a - b)

	return nums

};

console.log(sortedSquares([-7, -3, 2, 3, 11]));