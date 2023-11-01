/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	let count = 1;
	for (let index = 0; index < n.length; index++) {
		if (n[index]) {
			count += 1
		}
	}
	return count
};
console.log(hammingWeight(00000000000000000000000000001011));