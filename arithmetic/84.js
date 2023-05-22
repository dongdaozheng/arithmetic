/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 */
var setZeroes = function (matrix) {

	let temp = []

	for (let i = 0; i < matrix.length; i++) {
		const element = matrix[i];
		let left = 0
		let right = element.length - 1
		while (left < right) {
			if (element[left] === 0) {
				temp.push(left)
			}
			if (element[right] === 0) {
				temp.push(right)
			}
			left++
			right--
		}
		if (left === right && element[left] === 0) {
			temp.push(left)
		}
		if (element.includes(0)) {
			element.fill(0)
		}
	}

	for (let i = 0; i < temp.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			const element = matrix[j];
			element[temp[i]] = 0
		}
	}


	return matrix


};

console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]));

//[[1,0,1],[0,0,0],[1,0,1]]