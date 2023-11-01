/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
	const map = new Map(), result = []
	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], map.get(nums[i]) + 1 || 1)
	}
	for (let [key, value] of map) {
		if (value > 1) {
			result.push(key)
		}
	}
	return result
};
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));