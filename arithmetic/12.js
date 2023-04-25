/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {


	let arr = [];

	for (let index = 0; index < nums1.length; index++) {
		if (index < m) {
			arr.push(nums1[index])
		}
	}

	for (let index = 0; index < nums2.length; index++) {
		if (index < n) {
			arr.push(nums2[index])
		}
	}
	arr.sort()
	return arr
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

