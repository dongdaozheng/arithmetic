/**
 * @param {number[]} nums
 * @return {number}
	给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 * 
 */
var maximumProduct = function (nums) {
	nums.sort((a, b) => a - b);
	const n = nums.length;
	return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3]);
};
console.log(maximumProduct([-100, -98, -1, 2, 3, 4]));