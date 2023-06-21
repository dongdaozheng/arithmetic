/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let left = 0, right = height.length - 1, max = 0, min = 0
	while (left < right) {
		min = Math.min(height[left], height[right])
		max = Math.max(max, (right - left) * min)
		if (height[left] < height[right]) {
			left++
		} else {
			right--
		}
	}
	return max
};
console.log(maxArea([1, 1]));