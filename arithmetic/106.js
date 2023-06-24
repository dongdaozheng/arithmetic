/**
 * @param {number[]} nums
 * @return {number}
 * 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。
 */
var findMaxConsecutiveOnes = function (nums) {
	let count = 0, maxCount = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			count = 0
		} else if (nums[i] === 1) {
			count++
			maxCount = Math.max(maxCount, count)
		}
	}
	maxCount = Math.max(maxCount, count)
	return maxCount
};
console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));