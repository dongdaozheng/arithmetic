/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，
 * 满足 nums[i] == nums[j] 且 abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
 */
var containsNearbyDuplicate = function (nums, k) {
	const map = new Map()

	for (let index = 0; index < nums.length; index++) {
		if (map.has(nums[index]) && Math.abs(index - map.get(nums[index] <= k))) {
			return true
		}
		map.set(nums[index], index)
	}
	return false
};
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));