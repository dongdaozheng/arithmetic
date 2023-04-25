/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 * 请你编写一个函数，它接收一个 多维数组 arr 和它的深度 n ，并返回该数组的 扁平化 后的结果。

多维数组 是一种包含整数或其他 多维数组 的递归数据结构。

数组 扁平化 是对数组的一种操作，定义是将原数组部分或全部子数组删除，
并替换为该子数组中的实际元素。只有当嵌套的数组深度大于 n 时，才应该执行扁平化操作。第一层数组中元素的深度被认为是 0
**/
const result = []

var flat = function (arr, n) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] instanceof Array && n > 0) {
			flat(arr[i], n - 1)
		} else {
			result.push(arr[i])
		}
	}
	return result
};
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));