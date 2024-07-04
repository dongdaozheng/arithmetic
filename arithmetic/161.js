/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
  backtrack(candidates, [], result, 0, target);
  return result;
};

function backtrack(candidates, tempList, result, start, target) {
  if (target === 0) {
    result.push([...tempList]);
    return;
  }
  if (target < 0) return;
  for (let i = start; i < candidates.length; i++) {
    if (i > start && candidates[i] === candidates[i - 1]) continue;
    tempList.push(candidates[i]);
    backtrack(candidates, tempList, result, i + 1, target - candidates[i]);
    tempList.pop();
  }
}
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
