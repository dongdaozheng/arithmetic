/*
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let num = 0;

	// for (let index = 0; index < nums.length; index++) {

	// 	if (nums[index] === target) {
	// 		num = index
	// 		break
	// 	} else {
	// 		num = -1
	// 	}
	// }
	for (let i = 0, j = nums.length - 1; j >= i; i++, j--) {

		if (nums[i] === target) {
			num = i
			break
		} else if (nums[j] === target) {
			num = j
			break
		} else {
			num = -1
		}
	} 
	return num

};
console.log(search([-1, 0, 3, 5, 9, 12], 9));