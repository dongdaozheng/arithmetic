/**
 * @param {number[]} nums
 * @return {number}
 * 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
 */
var singleNumber = function (nums) {
	const map = new Map()
	for (const item of nums) {
		map.set(item, map.has(item) ? map.has(item) + 1 : 1)
	}
	for (const [key, value] of map) {
		if (value === 1) {
			return key
		}
	}
};
console.log(singleNumber([2, 2, 3, 2]));