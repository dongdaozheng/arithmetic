/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 167. 两数之和 II - 输入有序数组
 */
var twoSum = function (numbers, target) {
	let [left, right] = [0, numbers.length - 1];//左右指针
	while (left < right) {//
		if (numbers[left] + numbers[right] > target) {//和大了 right左移一位
			right--;
		} else if (numbers[left] + numbers[right] < target) {//和小了left右移一位
			left++;
		} else {
			return [left + 1, right + 1];
		}
	}
};
console.log(twoSum([2, 3, 4, 4, 5, 7, 8, 9, 13, 43], 6));