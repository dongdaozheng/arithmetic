var exist = function (board, word) {
	const h = board.length, w = board[0].length;//网格的长和宽
	const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];//方向数组
	const visited = new Array(h);//标记是否访问过的数组
	for (let i = 0; i < visited.length; ++i) {//初始化visited数组
		visited[i] = new Array(w).fill(false);
	}
	const check = (i, j, s, k) => {//检查从网格i，j出发是否能搜索到0-k的字符组成的子串
		//如果i，j位置的字符和第k个的字符不相等，则这条搜索路径搜索失败 返回false
		if (board[i][j] != s.charAt(k)) {
			return false;
			//如果搜索到了字符串的结尾，则找到了网格中的一条路径，这条路径上的字符正好可以组成字符串s
		} else if (k == s.length - 1) {
			return true;
		}
		visited[i][j] = true;//标记i，j被访问过了
		let result = false;
		for (const [dx, dy] of directions) {//向i，j的四个方向继续尝试寻找
			let newi = i + dx, newj = j + dy;
			if (newi >= 0 && newi < h && newj >= 0 && newj < w) {//新的坐标位置合法检查
				if (!visited[newi][newj]) {//新的坐标不能存在于visited中，也就是不能是访问过的
					const flag = check(newi, newj, s, k + 1);//继续检查新的坐标
					if (flag) {//如果在网格中找到了字符串 则跳过循环
						result = true;
						break;
					}
				}
			}
		}
		visited[i][j] = false;//回溯状态
		return result;//返回结果
	}

	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			const flag = check(i, j, word, 0);
			if (flag) {
				return true;
			}
		}
	}
	return false;
};