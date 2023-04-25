/**
 * @param {number[]} arr
 * @return {boolean}
 * 
 * 给你一个整数数组 arr，请你帮忙统计数组中每个数的出现次数。

如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false。
 */
var uniqueOccurrences = function (arr) {

	const map = new Map();
	const set = new Set();
	for (let item of arr) {
		map.set(item, map.get(item) ? map.get(item) + 1 : 1)
	}
	for (const [key, value] of map) {
		if (!set.has(value)) {
			set.add(value);
		} else {
			return false;
		}
	}
	return true;



};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));