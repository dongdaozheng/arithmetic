var MyQueue = function (array) {
	this.inStack = array
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	this.inStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	return this.inStack.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	return this.inStack.shift()
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	if (this.inStack.length) {
		return true
	} else return false
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

let obj = new MyQueue(["MyQueue", "push", "push", "peek", "pop", "empty"])

console.log(obj.push('2131232'));
console.log(obj);