/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
	const result = []
	backtrack(result, nums, target, [])
	return result
};
function backtrack(result, nums, target, tempList) {
	if (tempList.reduce((a, b) => a + b) === target) {
		result.push([...tempList])
		return
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums > target) continue
		tempList.push(nums[i])
		backtrack(result, nums, target, tempList)
		tempList.pop()
	}
}
console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));