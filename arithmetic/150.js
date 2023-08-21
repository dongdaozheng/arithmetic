/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给你一个整数数组 nums ，数组中的元素 可能相同 。返回该数组所有可能的子集（幂集）。
	解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 */
var subsetsWithDup = function (nums) {
	const result = []
	nums.sort((a, b) => a - b)
	function backtrack(tempList, result, nums, start) {
		result.push([...tempList])
		for (let i = start; i < nums.length; i++) {
			if (nums[i] === nums[i - 1] && i > start) continue
			tempList.push(nums[i])
			backtrack(tempList, result, nums, i + 1)
			tempList.pop()
		}
	}
	backtrack([], result, nums, 0)
	return result
};
console.log(subsetsWithDup([1, 2, 2]));