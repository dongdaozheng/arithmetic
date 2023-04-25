/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {


	const n = nums.length;

	let i = 1;

	let j = 1;

	while (i < n) {
		if (nums[i] !== nums[i - 1]) {
			nums[j] = nums[i]
			j++
		}
		i++
	}

	return j


};

console.log(removeDuplicates([1, 1, 2]));