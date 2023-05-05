/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var solveSudoku = function (board) {
	const row = new Array(9).fill(0).map(() => new Array(10));
	const col = new Array(9).fill(0).map(() => new Array(10));
	const bucket = new Array(9).fill(0).map(() => new Array(10));
	initMap(row, col, bucket, board);

	process(board, 0, 0, row, col, bucket);
};

function initMap(row, col, bucket, board) {
	let num, bid;
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			num = board[i][j];
			if (num !== '.') {
				bid = 3 * Math.floor(i / 3) + Math.floor(j / 3);
				num = num - '0';
				row[i][num] = true;
				col[j][num] = true;
				bucket[bid][num] = true;
			}
		}
	}
}
// 从i行j列开始往后填，直到填满
function process(board, i, j, row, col, bucket) {
	if (i === 9) return true;

	let nextI = j === 8 ? i + 1 : i;
	let nextJ = j === 8 ? 0 : j + 1;

	if (board[i][j] !== '.') {
		// 当前不需要填，继续往下走
		return process(board, nextI, nextJ, row, col, bucket);
	} else {
		let bid = 3 * Math.floor(i / 3) + Math.floor(j / 3);
		for (let num = 1; num <= 9; num++) {
			if ((!row[i][num]) && (!col[j][num]) && (!bucket[bid][num])) {
				row[i][num] = true;
				col[j][num] = true;
				bucket[bid][num] = true;
				board[i][j] = num + '';
				if (process(board, nextI, nextJ, row, col, bucket)) {
					return true;
				}
				// 当前这个数尝试失败，复原再尝试别的数
				row[i][num] = false;
				col[j][num] = false;
				bucket[bid][num] = false;
				board[i][j] = '.';
			}
		}

		return false;
	}
}