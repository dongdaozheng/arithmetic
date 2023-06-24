/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。
	如果数组中不存在目标值 target，返回 [-1, -1]。
	你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。
 * 输入：nums = [5,7,7,8,8,10], target = 8
	输出：[3,4]
 */
var searchRange = function (nums, target) {
	let ans = [-1, -1];
	const leftIdx = binarySearch(nums, target, true);
	const rightIdx = binarySearch(nums, target, false) - 1;
	if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
		ans = [leftIdx, rightIdx];
	}
	return ans;
};
function binarySearch(nums, target, lower) {
	let left = 0, right = nums.length - 1, index = nums.length
	while (left <= right) {
		const mid = Math.floor(left + (right - left) / 2)
		if (nums[mid] > target || (lower && nums[mid] >= target)) {
			right = mid - 1
			index = mid
		} else {
			left = mid + 1
		}
	}
	return index
}
console.log(searchRange([5, 7, 7, 8, 8, 10], 7));