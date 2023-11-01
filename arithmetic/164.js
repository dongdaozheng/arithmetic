/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	const map = new Map();
	for (const iterator of strs) {
		const temp = iterator.split('').sort().join('');
		map.set(temp, [...map.get(temp) || [], iterator]);
	}
	return Array.from(map.values());

};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));