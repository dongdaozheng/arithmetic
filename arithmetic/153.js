/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function (items1, items2) {
	const map = new Map(items1), result = []
	for (const [item1, item2] of items2) {
		map.set(item1, map.get(item1) + item2 || item2)
	}
	for (const item of map) {
		result.push(item)
	}
	return result.sort((a, b) => a[0] - b[0])
};
console.log(mergeSimilarItems([[1, 1], [4, 5], [3, 8]], [[3, 1], [1, 5]]));