/**
 * 给你一个整数数组coins, 表示不同面额的硬币; 以及一个整数amount,表示总金额
 *
 * 计算并返回可以凑成总金额所需的 最少硬币个数。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1
 *
 * 你恶意认为每种硬币的数量是无限的
 */

var coinChange = function (coins, amount) {
  // 固定金额下 最少的硬币个数
  // 边界条件
  // 循环:
  //     递推公式
  // dp[n] n 的钱数下, 返回零钱数的 最优解
  // 0 => n => 9 从0 递推到9
  // (4+5) (8+1) 取一个最小;

  // 如果只有2 和 5 这两种硬币, 想找12块钱
  // dp[n - coins[i]] + 1
  // 10 + 2 块钱
  // 7 + 5

  if (!amount) {
    return 0;
  }
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([2, 5], 7));
