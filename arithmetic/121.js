/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function (sentence, discount) {
	return sentence.split(' ').map(item => {
		if (/^\$(\d+)$/.test(item)) {
			return `$${(item.split('$')[1] * (1 - discount / 100)).toFixed(2)}`
		}
		else return item
	}).join(' ')
};
console.log(discountPrices("1 2 $3 4 $5 $6 7 8$ $93232 $10$", 100));