/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	const result = []
	backtrack(result, candidates, target, [])
	return result
};
function backtrack(result, nums, target, tempList) {
	console.log(tempList);
	if (tempList.reduce((a, b) => a + b) === target) {
		result.push([...tempList])
		return
	}
	for (let i = 0; i < nums.length; i++) {
		tempList.push(nums[i])
		backtrack(result, nums, target, tempList)
		tempList.pop()
	}
}
console.log(combinationSum([2, 3, 6, 7], 7));