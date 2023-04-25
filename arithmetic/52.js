/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */
var majorityElement = function (nums) {


	const map = new Map()

	let target = 0

	if (nums.length === 1) {
		target = nums[0]
		return target
	}

	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], map.get(nums[i]) ? map.get(nums[i]) + 1 : 1)
	}
	for (const [key, value] of map) {
		if (value > nums.length / 2) {
			target = key
		}
	}

	return target

};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));