var search = function (nums, target) {
	// const map = new Map()
	// for (let index = 0; index < nums.length; index++) {
	// 	map.set(nums[index], (map.get(nums[index]) || 0) + 1)
	// }
	// console.log(map);
	// for (const [key, value] of map) {
	// 	if (key === target) return value
	// }
	// return 0

	// let left = 0, right = nums.length - 1, count = 0
	// while (left < right) {
	// 	if (nums[left] === target) count++
	// 	if (nums[right] === target) count++
	// 	left++
	// 	right--
	// }
	// if (left === right && nums[left] === target) count++
	// return count

	let ans = 0;
	const leftIdx = binarySearch(nums, target, true);
	const rightIdx = binarySearch(nums, target, false) - 1;
	console.log(leftIdx, rightIdx);
	if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
		ans = rightIdx - leftIdx + 1;
	}
	return ans;
};
function binarySearch(nums, target, lower) {
	let left = 0, right = nums.length - 1, index = nums.length
	while (left <= right) {
		const mid = Math.floor(left + (right - left) / 2)
		if (nums[mid] > target || (lower && nums[mid] >= target)) {
			right = mid - 1
			index = mid
		} else {
			left = mid + 1
		}
	}
	return index
}
console.log(search([5, 7, 7, 7, 7, 7, 7, 8, 8, 10], 7));