/**
 * 给定两个字符串s 和 t, 编写一个函数来判断t 是否是s 的字母异位词。
 *
 * 注意：若s 和 t 中的每个字符出现的次数相同,则s 和 t 互为字母异位次 。
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const base = "a".charCodeAt(0);
  const arr = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - base] += 1;
    arr[t.charCodeAt(i) - base] -= 1;
  }
  return arr.every((i) => i === 0);
};

var isAnagram2 = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const hashObj = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in hashObj) {
      hashObj[s[i]] += 1;
    } else {
      hashObj[s[i]] = 1;
    }
    if (t[i] in hashObj) {
      hashObj[t[i]] -= 1;
    } else {
      hashObj[t[i]] = -1;
    }
  }

  return Object.keys(hashObj).every((key) => hashObj[key] === 0);
};
