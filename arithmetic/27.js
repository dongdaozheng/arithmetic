/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 */
var containsDuplicate = function (nums) {

	let number = null;
	const map = new Map();
	for (let item of nums) {
		map.set(item, map.get(item) ? map.get(item) + 1 : 1)
	}

	for (const [keys, values] of map) {
		console.log(keys, values);
		if (values >= 2) {
			number = true
			break
		} else {
			number = false
		}
	}

	return number

};
console.log(containsDuplicate([2, 3, 1, 4]));