/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentCount = init;
  const increment = () => (currentCount += 1);
  const decrement = () => (currentCount -= 1);
  const reset = () => (currentCount = init);

  return {
    increment,
    decrement,
    reset
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
