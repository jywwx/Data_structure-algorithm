/**
 *
 * 1.分割问题 把一个字符串 进行分割  分割之后的每个子字符串 都是 回文字符串 给出分割方法
 * 2.另一种题型 是 找出字符串所有是回文字符串的子字符串  思考下两种解法
 *
 *
 *
 * 给你一个字符串s,请你将s 分隔成一些子串，使每个子串 都是回文串。返回s所有可能的分隔方案
 *
 * 回文串 是正着读 和 反着读都一样的字符串。
 */

/**
 *
 * @param {*} s
 * @returns
 */

var partition = function (s) {
  // 分成两步骤
  // 1. 先完成所有子集的分隔
  // 2. 判断每个子集是回文串  满足回文的放入最后结果
  //  这题是非连续

  const ret = [];
  const path = [];
  bactrack(0);
  return ret;
  function bactrack(index) {
    if (isPalindrome(path)) {
      ret.push([...path]);
    }
    for (let i = index; i < s.length; i++) {
      path.push(s[i]);
      bactrack(i + 1);
      path.pop();
    }
  }

  function isPalindrome(s) {
    let left = 0,
      right = s.length - 1;
    while (left <= right) {
      if (s[left] !== s[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}; // 这个题也是有意义的

// 连续的子字符串是且是回文字符串的 可能
var partition2 = function (s) {
  const ret = [];
  const path = [];

  bactrack(0);
  return ret;

  function bactrack(i) {
    if (i >= s.length) {
      ret.push([...path]);
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (!isPalindrome(s, i, j)) {
        continue;
      }
      path.push(s.substr(i, j - i + 1));
      bactrack(j + 1);
      path.pop();
    }
  }
};

function isPalindrome(s, l, r) {
  for (let i = l, j = r; i < j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
}

// console.log(partition('abcba'),"//")
console.log(partition2("dabcba"), "第二解");
