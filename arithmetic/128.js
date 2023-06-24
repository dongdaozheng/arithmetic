/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	for (const item of matrix) {
		let result = search(item, target)
		if (result) return result
	}
	return false
};
function search(arr, target) {
	let left = 0, right = arr.length - 1
	while (left <= right) {
		const mix = Math.floor(left + (right - left) / 2)
		if (arr[mix] === target) return true
		if (arr[mix] < target) {
			left = mix + 1
		} else {
			right = mix - 1
		}
	}
}
console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 31));