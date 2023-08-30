/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
	let count = 0
	for (let i = 0; i < grid.length; i++) {
		const sum = grid[i].reduce((a, b) => a + b)
		if (sum >= 2) {
			count += sum
		}
	}
	let row = 0
	while (row < grid[0].length - 1) {
		const arr = []
		for (let i = 0; i < grid.length; i++) {
			arr.push(grid[i][row])
		}
		const sum = arr.reduce((a, b) => a + b)
		if (sum >= 2) {
			count += sum
		}
		row++
	}
	return count
};
console.log(countServers([[1, 0], [1, 1]]));