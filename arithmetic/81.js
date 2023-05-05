/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
	let result = [], left = 0, right = rowsCount, temp = [], counter = 1, snailTemp = [], snailCounter = 0, snailResult = []
	console.log(rowsCount * colsCount, this.length);
	if (rowsCount * colsCount == this.length || !rowsCount || !colsCount) {
		console.log(111);
		return result
	}

	while (right <= this.length) {
		temp = this.slice(left, right)
		if (counter % 2 === 0) {
			temp = this.slice(left, right).reverse()
		}
		result.push(temp)
		left += rowsCount
		right += rowsCount
		counter++
	}

	while (snailCounter < rowsCount) {
		snailTemp = []
		for (let i = 0; i < result.length; i++) {
			snailTemp.push(result[i][snailCounter])
		}
		snailResult.push(snailTemp)
		snailCounter++
	}

	return snailResult

}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

arr.snail(4, 5);
