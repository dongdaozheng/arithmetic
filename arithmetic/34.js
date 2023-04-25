/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 给你一个整数数组 nums，将 nums 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。

	返回满足此条件的 任一数组 作为答案。
 */
var sortArrayByParity = function (nums) {

	const n = nums.length;
	const res = new Array(n).fill(0);
	let left = 0, right = n - 1;
	for (const num of nums) {
		if (num % 2 === 0) {
			res[left++] = num;
		} else {
			res[right--] = num;
		}
	}
	return res;

};

console.log(sortArrayByParity([3, 1, 2, 4]));