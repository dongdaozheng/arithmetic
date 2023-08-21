/**
 * @param {number[]} nums
 * @return {number[][]}
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */
var permute = function (nums) {
	const result = []
	tempPermute(result, Array(nums.length).fill(false), nums, [])
	return result
};
function tempPermute(result, visited, nums, tempList) {

	if (tempList.length === nums.length) {
		result.push([...tempList])
		return
	}
	for (let i = 0; i < nums.length; i++) {
		if (visited[i]) continue
		visited[i] = true
		tempList.push(nums[i])
		tempPermute(result, visited, nums, tempList)
		tempList.pop()
		visited[i] = false
	}
}

console.log(permute([1, 2, 3])); 