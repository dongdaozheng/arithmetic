/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
	const map = new Map();
	const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];
	const rankedScores = score.slice().sort((a, b) => b - a);

	for (let i = 0; i < rankedScores.length; i++) {
		if (i < 3) {
			map.set(rankedScores[i], medals[i]);
		} else {
			map.set(rankedScores[i], String(i + 1));
		}
	}

	return score.map(score => map.get(score));
};
console.log(findRelativeRanks([10, 3, 8, 9, 4]));