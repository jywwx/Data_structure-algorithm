/**
 * 给你两个单词word1 和word2，请返回将word1 转换成word2
 * 所使用的最少操作数。
 *
 * 你可以对一个单词进行如下三种操作：
 *
 *   插入一个字符
 *   删除一个字符
 *   转换一个字符
 */
var minDistance = function (word1, word2) {
  const dp = Array(word1.length + 1)
    .fill(0)
    .map((i) => Array(word2.length + 1).fill(0));
  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = 1;
  }

  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + 1,
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1
        );
      }
    }
  }
  return dp[word1.length][word2.length];
};
