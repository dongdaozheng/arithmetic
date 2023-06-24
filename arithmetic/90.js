/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	const map = new Map()
	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], map.get(nums[i]) ? map.get(nums[i]) + 1 : 1)
	}
	console.log(map);
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));