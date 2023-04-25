/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 */
var intersection = function (nums1, nums2) {

	let number = []

	let l = 0, r = 0

	nums1.sort((a, b) => a - b)

	nums2.sort((a, b) => a - b)

	while (l < nums1.length && r < nums2.length) {
		if (nums1[l] === nums2[r]) {
			number.push(nums1[l])
			l++
			r++
		} else if (nums1[l] > nums2[r]) {
			r++
		} else {
			l++
		}

	}
	// for (let i = 0; i < nums1.length; i++) {
	// 	for (let j = 0; j < nums2.length; j++) {
	// 		if (nums1[i] === nums2[j]) {
	// 			number.push(nums1[i])
	// 		}
	// 	}

	// }

	return number = [...new Set(number)]

};

console.log(intersection([1, 2, 2, 4, 1, 5], [1, 2, 3, 4, 5, 6]));
