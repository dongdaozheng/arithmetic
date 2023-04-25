/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。

 */
var singleNumber = function (nums) {

	let number = null;
	const map = new Map();
	for (let item of nums) {
		map.set(item, map.get(item) ? map.get(item) + 1 : 1)
	}

	for (const [keys, values] of map) {
		if (values === 1) {
			number = keys
		}
	}

	return number



};

console.log(singleNumber([4, 1, 2, 1, 2, 4, 1, 0]));