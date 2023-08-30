/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
	const arr = new Array(9).fill(0).map((item, index) => item = index + 1);
	const result = [];
	backtrack(result, [], arr, 0);
	return result;

	function backtrack(result, tempList, arr, start) {
		if (tempList.length === k) {
			const sum = tempList.reduce((a, b) => a + b);
			if (sum === n) {
				result.push([...tempList]);
			}
			return;
		}
		for (let i = start; i < arr.length; i++) {
			if (tempList.includes(arr[i])) {
				continue; // 剪枝：跳过重复的数字
			}
			tempList.push(arr[i]);
			backtrack(result, tempList, arr, i + 1);
			tempList.pop();
		}
	}
};

console.log(combinationSum3(3, 9));