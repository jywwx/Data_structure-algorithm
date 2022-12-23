/**
 * 给定两个字符串text1，和text2,返回这连个字符串的最长公共
 * 子序列的长度。如果不存在公共子序列，则返回0。
 *
 *
 * 一个字符串的子序列是指这样一个新的字符串；它是由原字符串在不
 * 改变字符的相对顺序的情况下删除某些字符(也可以不删除任何字符)
 * 后组成的新字符串。
 *
 * 例如‘ace’是‘abcde’的子序列，但‘aec’不是‘abcde’的子序列
 *
 * 两个字符串的公共子序列是这两个字符串所公共拥有的子序列
 */

var longestCommonSubsequence = function (text1, text2) {
  //dp[i][j] 的定义
  // text1下标为i的之前的字符串 和 text2 下标为j之前的字符串
  // 的最长公共子序列的长度 就是 dp[i][j]
  const dp = Array(text1.length + 1)
    .fill(0)
    .map((i) => Array(text2.length + 1).fill(0));

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[text1.length][text2.length];
};
