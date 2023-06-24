/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
	const map = new Map(), result = []
	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], map.get(nums[i]) + 1 || 1)
	}
	for (const [key, value] of map) {
		if (value === 1) result.push(key)
	}
	return result
};

console.log(singleNumber([1, 1, 2, 3, 4, 4, 5, 5, 6]));