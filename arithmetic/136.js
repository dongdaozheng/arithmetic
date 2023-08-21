/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	let result = []
	backtrack(candidates, target, result, [], 0)
	return result
};

function backtrack(candidates, target, result, temp, start) {
	if (target === 0) {
		result.push([...temp])
		return
	}
	for (let i = start; i < candidates.length; i++) {
		if (target < candidates[i]) continue
		temp.push(candidates[i])
		backtrack(candidates, target - candidates[i], result, temp, i)
		temp.pop()
		console.log(temp.pop());
	}
}
console.log(combinationSum([2, 3, 5], 8));
