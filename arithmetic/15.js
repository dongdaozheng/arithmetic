/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

	let arr = []


	for (let i = 0; i < nums1.length; i++) {
		for (let j = 0; j < nums2.length; j++) {
			if (nums1[i] === nums2[j]) {
				arr.push(nums2[j])
				break

			}
		}
	}
	arr = [...new Set(arr)]



	return arr
};

console.log(intersection([1, 2, 2, 1], [1, 2, 3]));