/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
	const flatMat = mat.flat(1), result = []
	if (r * c !== flatMat.length) return mat
	for (let i = 0; i < flatMat.length; i += c) {
		const temp = flatMat.slice(i, i + c)
		result.push(temp)
	}
	return result
};
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));