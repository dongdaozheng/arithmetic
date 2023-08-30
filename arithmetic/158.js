/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
	const dp = new Array(3).fill(0).map((item, index) => item = Array(3).fill(0))
	for (let i = 0; i < moves.length; i++) {
		i % 2 === 0 ? dp[moves[i][0]][moves[i][1]] = 'A' : dp[moves[i][0]][moves[i][1]] = 'B'
	}
	// 检查对角线

	const set1 = new Set()
	for (let i = 0; i < dp.length; i++) {
		set1.add(dp[i][i])
	}
	for (const value of set1.values()) {
		if (set1.size === 1 && !set1.has(0)) {
			return value
		}
	}

	console.log(dp);




	// 检查行
	let row = 0
	while (row < dp.length) {
		const set2 = new Set(dp[row])
		if (set2.size === 1 && !set2.has(0)) return dp[row][0]
		row++
	}
	// 检查列
	let column = 0
	while (column < dp.length) {
		const set3 = new Set()
		for (let i = 0; i < dp.length; i++) {
			set3.add(dp[i][column])
		}


		if (set3.size === 1 && !set3.has(0)) return [...set3]

		column++
	}

	for (let i = 0; i < dp.length; i++) {
		for (let j = 0; j < dp[i].length; j++) {
			if (dp[i][j] === 0) {
				return "Pending";
			}
		}
	}
	return "Draw";



};
console.log(tictactoe([[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]]));