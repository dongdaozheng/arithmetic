/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 给定一个排序的整数数组 nums 和一个整数目标值 target ，
 * 请在数组中找到 target ，并返回其下标。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
	请必须使用时间复杂度为 O(log n) 的算法
 */
var searchInsert = function (nums, target) {
	let left = 0, right = nums.length - 1, ans = nums.length
	while (left <= right) {
		const mid = Math.floor(left + (right - left) / 2)
		if (nums[mid] >= target) {
			ans = mid
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return ans

};
console.log(searchInsert([1, 1, 2, 2, 3, 5, 6], 4));