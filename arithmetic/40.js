/**
 * @param {number[]} nums
 * @return {void}
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
	请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 */
var moveZeroes = function (nums) {

	let left = 0
	let right = 0
	let temp = 0

	while (right < nums.length) {

		if (nums[right] !== 0) {
			temp = nums[right]
			nums[right] = nums[left]
			nums[left] = temp
			left++
		}
		right++
	}

	return nums



};

console.log(moveZeroes([1, 2]));