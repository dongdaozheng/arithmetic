/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums: number[]): number[] {

	let left = [], right = [], temp = nums[0]
	if (nums.length <= 1) return nums
	for (let i = 1; i < nums.length; i++) {
		const element = nums[i];
		if (element <= temp) left.push(nums[i])
		else right.push(nums[i])
	}
	return sortColors(left).concat(temp, sortColors(right))
};
console.log(sortColors([2, 0, 2, 1, 1, 0]));