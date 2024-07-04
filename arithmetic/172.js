/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
  const map = new Map();
  for (const item of nums) {
    map.set(item, map.get(item) + 1 || 1);
  }
  const arr = [...map.values()];
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    if (arr[left] > 2 || arr[right] > 2) {
      return false;
    }
    left++;
    right--;
  }
  if (left === right && arr[left] > 2) {
    return false;
  }
  return true;
};

console.log(isPossibleToSplit([1, 1, 2, 2, 34, 4, 2]));
