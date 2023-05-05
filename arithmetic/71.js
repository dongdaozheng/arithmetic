/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {

	for (let index = 0; index < source.length; index++) {
		if (source[index].includes('/*') && source[index].includes('*/')) {
			source.splice(index, 1)
		}
		if (source[index].includes('//')) {
			source[index] = ''
		}
	}
	let left = 0, right = source.length - 1, selectLeft, selectRight

	while (left < right) {
		if (source[left].includes('/*')) {
			selectLeft = left
		}
		if (source[right].includes('*/')) {
			selectRight = right
		}
		left++
		right--
	}

	source.splice(selectLeft, (selectRight - selectLeft) + 1)
	console.log(source);



};
console.log(removeComments(["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]));