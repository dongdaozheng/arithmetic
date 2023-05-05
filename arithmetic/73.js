/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 * 给你一个数组 nums ，数组中有 2n 个元素，按 [x1,x2,...,xn,y1,y2,...,yn] 的格式排列。

请你将数组按 [x1,y1,x2,y2,...,xn,yn] 格式重新排列，返回重排后的数组。

 */
var shuffle = function (nums, n) {
	let x = [], y = [], result = []
	x.push(...nums.slice(0, n))
	y.push(...nums.slice(n, nums.length))
	for (let index = 0; index < x.length; index++) {
		result.push(x[index], y[index])
	}
	return result
};

console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4));