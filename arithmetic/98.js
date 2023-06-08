/**
 * @param {string} s
 * @return {number}
 * 给你一个仅由 大写 英文字符组成的字符串 s 。

你可以对此字符串执行一些操作，在每一步操作中，你可以从 s 中删除 任一个 "AB" 或 "CD" 子字符串。

通过执行操作，删除所有 "AB" 和 "CD" 子串，返回可获得的最终字符串的 最小 可能长度。

注意，删除子串后，重新连接出的字符串可能会产生新的 "AB" 或 "CD" 子串。
 */
let minLength = function (s) {
  let len = s.length;
  while (s.includes('AB') || s.includes('CD')) {
    s = s.replace('AB', '').replace('CD', '');
    len = s.length;
  }
  return len;
};

console.log(minLength("ABFCACDB"));