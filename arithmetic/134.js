/**
 * @param {number} n
 * @return {number}
 */
var numberOf2sInRange = function (n) {
	const arr = new Array(n + 1).fill(0)
	let result = 0
	for (const index in arr) {
		arr[index] = index
	}
	console.log(arr);
	const regex = /2/g;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].match(regex))
			result += arr[i].match(regex).length
	}
	return result
};
console.log(numberOf2sInRange(2));