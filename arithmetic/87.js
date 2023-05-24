/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 * 给定一个数组 arr 和一个块大小 size ，返回一个 分块 的数组。
 * 分块 的数组包含了 arr 中的原始元素，但是每个子数组的长度都是 size 。
 * 如果 arr.length 不能被 size 整除，那么最后一个子数组的长度可能小于 size 。
 * 输入：arr = [1,2,3,4,5], size = 1
	输出：[[1],[2],[3],[4],[5]]
	解释：数组 arr 被分割成了每个只有一个元素的子数组。

 */
var chunk = function (arr, size) {
	let result = [];
	while (arr.length >= size) {
		result.push(arr.slice(0, size));
		arr.splice(0, size);
	}
	arr.length && result.push(arr);
	return result;
};
console.log(chunk([1, 2, 3, 4, 5], 1));