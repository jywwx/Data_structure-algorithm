/**
 * 给你一个整数数组coins 表示不同面额的硬币，另给一个整数amount 便是总金额。
 *
 * 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回0。
 *
 * 假设每一种爱呢的硬币有无限个。
 * 题目数据摆这个结果符合32位带符号整数。
 */

var change = function (coins, amount) {
  // dp[i]  凑齐i块钱的不同金额种类
  // 1,2,5
  // dp[i]
  // i = 100;
  const dp = Array(amount + 1).fill(0);
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = dp[j - coins[i]];
    }
  }
  return dp[amount];
};

change([1], 5);
