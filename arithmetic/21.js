/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/search-insert-position
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var searchInsert = function (nums, target) {

	let number = 0

	for (let i = 0, j = nums.length - 1; i < j; i++, j--) {
		if (target === nums[i]) {
			number = i
			break
		} else if (target === nums[j]) {
			number = j
			break
		} else {
			nums.push(target)
			nums.sort((a, b) => a - b)
			break
		}

	}

	nums.forEach((element, index) => {
		if (element === target) {
			number = index
		}
	});

	return number

};

console.log(searchInsert([1, 3, 5, 6], 9));