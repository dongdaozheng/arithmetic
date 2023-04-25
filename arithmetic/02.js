/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

	let arr = [];

	for (let index = 0; index < nums.length; index++) {

		arr[0] = index

		let number = target - nums[index]

		for (let i = index + 1, j = nums.length - 1; i <= j; i++, j--) {
			if (nums[i] === number) {
				arr[1] = i
				return arr
			}
			else if (nums[j] === number) {
				arr[1] = j
				return arr
			}
		}
	}

	return arr

};

console.log(twoSum([2, 4, 11, 3], 6));