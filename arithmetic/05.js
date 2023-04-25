/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

	let len = nums.length

	for (let index = 0; index < len; index++) {
		if (nums[index] === 0) {
			nums.splice(index, 1)
			nums.push(0)
			index--
			len--
		}

	}
	return nums


};

console.log(moveZeroes([1, 1, 0, 0, 0, 1]));