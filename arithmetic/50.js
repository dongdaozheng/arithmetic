/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 * 
给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。
初始化 A 和 B 的元素数量分别为 m 和 n。

输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
m+n === a.length
 */
var merge = function (A, m, B, n) {
	A.splice(m, A.length - m, ...B)
	A.sort((a, b) => a - b)
	return A
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

