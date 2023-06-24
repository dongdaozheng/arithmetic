/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

	let left = [];
	let right = [];
	let item = nums[0];
	if (nums.length <= 1) {
		return nums
	}
	for (let i = 1; i < nums.length; i++) {
		if (item >= nums[i]) {
			left.push(nums[i])
		} else {
			right.push(nums[i])
		}
	}
	return sortArray(left).concat([item], sortArray(right))
};
console.log(sortArray([2, 0, 2, 1, 1, 0]));