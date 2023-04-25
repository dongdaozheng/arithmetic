/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/two-sum
 */
var twoSum = function (nums, target) {

	let number = []

	// for (let i = 0; i < nums.length; i++) {

	// 	for (let j = 0; j < nums.length; j++) {

	// 		if (nums[i] + nums[j] === target && i != j) {
	// 			number[0] = i;
	// 			number[1] = j;
	// 			break
	// 		}

	// 	}

	// }

	for (let i = 0; i < nums.length; i++) {

		for (let j = 0, k = nums.length - 1; j < k; j++, k--) {

			if (nums[j] + nums[i] === target && i != j) {
				number = [i, j]
				break
			} else if (nums[i] + nums[k] === target && i != k) {
				number = [i, k]
				break
			}

		}

		if(number[i] + number)

	}

	


	return number

};
console.log(twoSum([3, 9, 2, 1, 1, 3], 6));