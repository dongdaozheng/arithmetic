function solveNQueens(n) {
	const board = Array(n).fill(0).map(() => Array(n).fill('.'));
	const result = [];

	backtrack(board, 0);

	return result;

	function backtrack(board, row) {
		if (row === n) {
			result.push(board.map(row => row.join('')));
			return;
		}

		for (let col = 0; col < n; col++) {
			if (isValid(board, row, col)) {
				board[row][col] = 'Q';
				backtrack(board, row + 1);
				board[row][col] = '.';
			}
		}
	}

	function isValid(board, row, col) {
		for (let i = 0; i < row; i++) {
			if (board[i][col] === 'Q') {
				return false; // 同一列已经有皇后
			}
		}

		for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
			if (board[i][j] === 'Q') {
				return false; // 左上对角线已经有皇后
			}
		}

		for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
			if (board[i][j] === 'Q') {
				return false; // 右上对角线已经有皇后
			}
		}

		return true;
	}
}
console.log(solveNQueens(9));