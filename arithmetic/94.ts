/* 给定两个整数，分别表示分数的分子 numerator 和分母 denominator，以 字符串形式返回小数 。

如果小数部分为循环小数，则将循环的部分括在括号内。

如果存在多个答案，只需返回 任意一个 。

对于所有给定的输入，保证 答案字符串的长度小于 104 。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/fraction-to-recurring-decimal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

function fractionToDecimal(numerator: number, denominator: number): string {
	let result: string[] = []
	result = (numerator / denominator).toString().split('.')
	let temp = result[1]
	const map = new Map()
	for (let i = 0; i < temp.length; i++) {
		map.set(temp[i], i)
	}
	result[1] = `(${[...map.keys()].join('')})`
	return result.join(',').replace(',', '.')

};

console.log(fractionToDecimal(4, 333));
