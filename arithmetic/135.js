/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement(nums1, nums2) {
	const stack = []; // 单调递减栈，存储 nums2 中的元素
	const map = new Map(); // 存储每个元素的下一个更大元素
	const result = [];

	for (let i = 0; i < nums2.length; i++) {

		while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
			const prev = stack.pop();
			map.set(prev, nums2[i]);
		}

		stack.push(nums2[i]);
	}

	while (stack.length > 0) {
		const num = stack.pop();
		map.set(num, -1);
	}

	for (let i = 0; i < nums1.length; i++) {
		result.push(map.get(nums1[i]));
	}

	return result;
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));