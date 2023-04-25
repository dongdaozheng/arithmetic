/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
nums = [0,1,2,2,3,0,4,2], val = 2

 */
var removeElement = function (nums, val) {

	for (let i = 0, j = nums.length - 1; i <= j; i++, j--) {

		if (nums[i] === val) {
			nums.splice(i, 1)
			i--
		} else if (nums[j] === val) {
			nums.splice(j, 1)
			j++
		}
	}

	return nums
};

console.log(removeElement([4, 5], 5));