/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
	nums = nums.sort((a, b) => b - a)
	const map = new Map(), result = []
	for (const item of nums) {
		map.set(item, map.get(item) + 1 || 1)
	}
	const temp = [...new Set(nums)].sort((a, b) => map.get(a) - map.get(b))
	console.log(map);
	for (const item of temp) {
		let count = map.get(item)
		while (count--) {
			result.push(item)
		}
	}
	return result
};
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));