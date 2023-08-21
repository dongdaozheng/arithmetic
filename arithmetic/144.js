/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
	let left = 0, right = nums.length - 1;
	while (left < right) {
		const mid = Math.floor((left + right) / 2);
		if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
			return nums[mid];
		}
		if (nums[mid] === nums[mid + 1]) {
			if ((right - mid) % 2 === 0) {
				left = mid + 2;
			} else {
				right = mid - 1;
			}
		} else {
			if ((mid - left) % 2 === 0) {
				right = mid - 2;
			} else {
				left = mid + 1;
			}
		}
	}
	return nums[left];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
