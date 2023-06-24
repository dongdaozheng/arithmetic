/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function (o1, o2) {

	if (o1 instanceof Object && o2 instanceof Object) {
		const o1Map = new Map(Object.entries(o1))
		const o2Map = new Map(Object.entries(o2))
		for (const [key, value] of o1Map) {
			if (value !== o2Map.get(key)) return false
		}
	} else if (o1 !== o2) return false

	return true

};
console.log(areDeeplyEqual(false, true));