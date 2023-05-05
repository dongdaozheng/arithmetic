/**
 * @param {character[][]} board
 * @return {boolean}
 * 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次
 */
var isValidSudoku = function (board) {
	let columnIndex = 0
	let rowIndex = 0
	let rowMap = new Map()
	let columnMap = new Map()
	while (rowIndex < board.length) {
		for (let i = 0; i < board[rowIndex].length; i++) {
			let el = board[rowIndex][i]
			if (/[0-9]/.test(el) && rowMap.has(el)) {
				return false
			}
			rowMap.set(el, i)
		}
		rowMap.clear()
		rowIndex++
	}
	while (columnIndex < board.length) {
		for (let index = 0; index < board.length; index++) {
			let el = board[index][columnIndex]
			if (/[0-9]/.test(el) && columnMap.has(el)) {
				return false
			}
			columnMap.set(el, index)
		}
		columnMap.clear()
		columnIndex++
	}

	for (let m = 0; m < 3; m++) {
		let n = m * 3  // 0,3,6
		for (let k = 0; k < 3; k++) {
			let h = k * 3
			let map = new Map()
			for (let i = n; i < 3 + n; i++) {
				for (let j = h; j < h + 3; j++) {
					let e = board[i][j]
					if (e !== '.') {
						if (map.has(e)) {
							return false;
						} else {
							map.set(e, 1)
						}
					}
				}
			}
		}
	}


	return true
}
console.log(isValidSudoku([
	[".", ".", ".", ".", "5", ".", ".", "1", "."],
	[".", "4", ".", "3", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", "3", ".", ".", "1"],
	["8", ".", ".", ".", ".", ".", ".", "2", "."],
	[".", ".", "2", ".", "7", ".", ".", ".", "."],
	[".", "1", "5", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", "2", ".", ".", "."],
	[".", "2", ".", "9", ".", ".", ".", ".", "."],
	[".", ".", "4", ".", ".", ".", ".", ".", "."]]
));