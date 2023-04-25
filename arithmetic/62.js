/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。
 * 返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。

 */
var intersect = function (nums1, nums2) {

	const map = new Map()
	const map1 = new Map()

	let result = []

	let temp
	let temp1


	for (const item of nums1) {
		map.set(item, map.get(item) ? map.get(item) + 1 : 1)
	}

	for (const item of nums2) {
		map1.set(item, map1.get(item) ? map1.get(item) + 1 : 1)
	}


	for (const [key, value] of map) {
		if (map1.has(key)) {
			if (value < map1.get(key)) {
				temp = new Array(value).fill(key)
				result.push(...temp)
			} else {
				temp1 = new Array(map1.get(key)).fill(key)
				result.push(...temp1)
			}
		}
	}
	console.log(map, map1);

	return result


};
console.log(intersect([4, 9, 5, 9], [9, 4, 9, 8, 4]));