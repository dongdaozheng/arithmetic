// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	const result = []
	nums.sort((a, b) => a - b)
	tempPermute(result, [], Array(nums.length).fill(false), nums)
	return result
};

function tempPermute(result, tempList, visited, nums) {

	if (tempList.length === nums.length) {
		result.push([...tempList])
		return
	}
	for (let index = 0; index < nums.length; index++) {
		if (visited[index] || (index > 0 && nums[index] === nums[index - 1] && !visited[index - 1])) continue
		visited[index] = true
		tempList.push(nums[index])

		tempPermute(result, tempList, visited, nums)
		tempList.pop()

		visited[index] = false
	}
}
console.log(permuteUnique([1, 12, 4]));