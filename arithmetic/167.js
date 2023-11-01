/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
	const result = [];
	backtrack(tiles, [], result, 0);
	return result;
};

function backtrack(tiles, tempList, result, start) {
	if (tempList.length > 0) {
		result.push([...tempList]);
	}

	for (let i = start; i < tiles.length; i++) {
		if (i > start && tiles[i] === tiles[start]) {
			continue;
		}
		tempList.push(tiles[i]);
		backtrack(tiles, tempList, result, i + 1);
		tempList.pop();
	}
}
console.log(numTilePossibilities('AAB'));