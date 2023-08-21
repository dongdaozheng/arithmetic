/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
	const nums = new Array(n).fill(0).map((item, index) => item = index + 1)
	const result = []
	backtrack(nums, result, [], k, 0)
	return result
};
function backtrack(nums, result, temp, k, start) {
	if (temp.length === k) {
		result.push([...temp])
	}
	for (let i = start; i < nums.length; i++) {
		temp.push(nums[i])
		backtrack(nums, result, temp, k, i + 1)
		temp.pop()
	}
}
console.log(combine(4, 2));
