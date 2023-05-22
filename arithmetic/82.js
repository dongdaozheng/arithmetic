/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {

	if (o1 instanceof Object && o2 instanceof Object) {
		const map1 = new Map(Object.entries(o1))
		const map2 = new Map(Object.entries(o2))
		for (const [key, value] of map1) {
			if (!map2.has(key) || map2.get(key) !== value) {
				return false
			}
		}
	}

	return true


};
console.log(areDeeplyEqual(false, true));