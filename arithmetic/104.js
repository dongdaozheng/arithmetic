/**
 * @param {number[][]} triangle
 * @return {number}
 * 120. 三角形最小路径和
 */
var minimumTotal = function (triangle) {
	const map = new Map()
	for (const index in triangle) {
		map.set(index, triangle[index])
	}
	console.log(map);
}
console.log(minimumTotal([[-1], [2, 3], [1, -1, -3]]));