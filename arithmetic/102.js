/**
 * @param {number[][]} grid
 * @return {number}
 * 给你一个下标从 0 开始、大小为 n x n 的整数矩阵 grid ，返回满足 Ri 行和 Cj 列相等的行列对 (Ri, Cj) 的数目。
	如果行和列以相同的顺序包含相同的元素（即相等的数组），则认为二者是相等的。
 */
var equalPairs = function (grid) {
	let count = 0, trim = [], result = 0
	while (count < grid.length) {
		let temp = []
		for (let i = 0; i < grid.length; i++) {
			const element = grid[i][count];
			temp.push(element)
		}
		count++
		trim.push(temp)
	}
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < trim.length; j++) {
			if (equality(grid[i], trim[j])) {
				result++
			}
		}
	}
	return result
};
function equality(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((item, index) => { return item === arr2[index] })
}
console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]]));