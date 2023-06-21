/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * 给定M×N矩阵，每一行、每一列都按升序排列，请编写代码找出某元素。
 */
var searchMatrix = function (matrix, target) {
	for (const nums of matrix) {
		if (search(nums, target)) {
			return true
		}
	}
	return false
};

function search(nums, target) {
	let left = 0, right = nums.length - 1
	while (left <= right) {
		const mid = Math.floor(left + (right - left) / 2)
		if (nums[mid] === target) return true
		if (nums[mid] > target) {
			right = mid - 1
		} else {
			left = mid + 1
		}
	}
	return false
}
console.log(searchMatrix([
	[1, 4, 7, 11, 15],
	[2, 5, 8, 12, 19],
	[3, 6, 9, 16, 22],
	[10, 13, 14, 17, 24],
	[18, 21, 23, 26, 30]
], 0));