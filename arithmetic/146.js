/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
function flat(arr, n) {
	const result = [];

	arr.forEach((item) => {
		if (Array.isArray(item) && n > 0) {
			result.push(...flat(item, n - 1));
		} else {
			result.push(item);
		}
	});

	return result;
}




console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1));