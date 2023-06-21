
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// 输出：[2,2,2,1,4,3,3,9,6, 7,19]

var relativeSortArray = function (arr1, arr2) {
	const map = new Map(), res = []
	for (let num of arr1) {
		map.set(num, (map.get(num) || 0) + 1)
	}
	for (let num of arr2) {
		let i = map.get(num)
		while (i-- > 0) {
			res.push(num)
		}
	}
	console.log(res);
	return res.concat(arr1.filter(num => !res.includes(num)).sort((a, b) => a - b))
};
console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
