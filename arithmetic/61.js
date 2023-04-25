/**
 * @param {number[]} nums
 * @return {number}
 * 给定一个包含 [0, n] 中 n 个数的数组 nums ，找出 [0, n] 这个范围内没有出现在数组中的那个数
 */
var missingNumber = function (nums) {

	nums.sort((a, b) => a - b)

	let result = 0

	for (let index = 0; index < nums.length; index++) {
		if (index !== nums[index]) {
			result = index
			break
		} else {
			result = index + 1
		}
	}
	return result

};
console.log(missingNumber([0, 1, 3, 4, 5, 6, 6, 7]));