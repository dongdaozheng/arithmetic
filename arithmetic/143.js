/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function (nums, k) {
	const result = []
	backtrack(nums, k, [], result, 0)
	console.log(result);
	return result.length > 1
};
function backtrack(nums, k, tempList, result, start) {
	if (tempList.length >= 2 && tempList.reduce((a, b) => a + b) % k === 0) {
		result.push([...tempList])
		return
	}
	for (let i = start; i < nums.length; i++) {
		tempList.push(nums[i])
		backtrack(nums, k, tempList, result, i + 1)
		tempList.pop()
	}
}
console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));