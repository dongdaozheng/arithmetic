/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {


	let i = 0;

	for (let index = 0; index < nums.length; index++) {

		if (nums[index] === target) {
			return i = index
		}
		else if (nums[index] < target) {
			i = index + 1
		}

	}

	return i


};

console.log(searchInsert([1, 3, 5, 6], 2));