/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 * 
 * 给你一个整数数组 arr 和两个整数 k 和 threshold 。

请你返回长度为 k 且平均值大于等于 threshold 的子数组数目。
arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
输出：3

 */
var numOfSubarray = function (arr, k, threshold) {
	let left = 0
	let right = k
	let result = k * threshold
	let temp = []
	let flag = 0

	while (right <= arr.length) {
		let sum = 0
		temp = arr.slice(left, right)

		let i = 0
		let j = temp.length - 1

		while (i < j) {
			if (temp[i] + temp[i] > result) {
				return
			}
			sum += (temp[i] + temp[j])
			i++
			j--
		}
		if (i === j) {
			sum += temp[i]
		}
		if (sum >= result) {
			flag++
		}
		left++
		right++
	}
	return flag

};

console.log(numOfSubarray([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)); 