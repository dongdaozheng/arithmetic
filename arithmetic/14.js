/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	let left = 0;
	let right = 1;

	let flag = false
	nums = nums.sort((a, b) => a - b)


	while (right < nums.length) {
		if (nums[left] === nums[right]) {
			flag = true
		}
		left++;
		right++
	}



	return flag
};

console.log(containsDuplicate([2, 14, 18, 23, 22]));