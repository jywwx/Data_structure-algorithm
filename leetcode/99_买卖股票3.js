/**
 * 给定一个数组，他的第i给元素是一支给定的股票在第i天的价格。
 * 设计一个算法来计算你能获取的最大利润。你最多可以完成两笔交易
 * 。
 *
 * 注意： 你不能同时参与多笔交易（你必须在再次购买前出售调之前的股票）。
 * 最多只能买卖两次
 */
var maxProfit = function (prices) {
  // 只能两次买卖
  // 不买卖 0
  // 买卖一次
  // 买卖两次

  // dp[i][0] 不买也不卖
  // dp[i][1] 第i天 你买入股票的状态 第一次买入
  // dp[i][2] 卖出  第一次卖出
  // dp[1][3] 第二次买入
  // dp[i][4] 第二次卖出
  const len = prices.length;
  const dp = Array(len)
    .fill(0)
    .map((i) => [0, 0, 0, 0, 0]);

  dp[0][1] = -prices[0];
  dp[0][3] = -prices[0];

  for (let i = 1; i < len; i++) {
    dp[i][0] = dp[i - 1][0];
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
    dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
  }
  return dp[len - 1][4];
};
// 降低空间复杂度
var maxProfit2 = function (prices) {
  const len = prices.length;
  const dp = [0, -prices[0], 0, -prices[0], 0];
  for (let i = 1; i < len; i++) {
    dp[0] = dp[0];
    dp[1] = Math.max(dp[1], dp[0] - prices[i]);
    dp[2] = Math.max(dp[2], dp[1] + prices[i]);
    dp[3] = Math.max(dp[3], dp[2] - prices[i]);
    dp[4] = Math.max(dp[4], dp[3] + prices[i]);
  }
  return dp[4];
};
