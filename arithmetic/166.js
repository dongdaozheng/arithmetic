/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {

	// for (let index = 0; index < heights.length; index++) {
	// 	let temp = 0
	// 	if (heights[index] < heights[index + 1]) {
	// 		temp = names[index]
	// 		names[index] = names[index + 1]
	// 		names[index + 1] = temp
	// 	}
	// }
	// return names

	const tempList = Array(heights.length).fill(0).map((item, index) => item = index)
	const targe = tempList.sort((a, b) => heights[a] - heights[b])
	const result = []
	for (let index = 0; index < names.length; index++) {
		result.push(names[targe[index]])
	}
	return result

};
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]));