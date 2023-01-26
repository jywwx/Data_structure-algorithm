/**
 * 给定一个数组pricea,它的第i个元素prices[i]表示一支给定股票第i天的价格。
 * 你只能选择某一天买入这只股票，并选择在未来的某一个不同的日子卖出该股票。
 * 设计一个算法来计算你所能获取的最大利润。
 *
 * 返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回0。
 *
 * 只能买卖一次
 */

var maxProfit = function (prices) {
  // 贪心思路
  let low = -Infinity;
  let ret = 0;
  for (let i = 0; i < prices.length; i++) {
    low = Math.min(low, prices[i]);
    ret = Math.max(ret, prices[i] - low);
  }
  return ret;
};

var maxProfit2 = function (prices) {
  // 动态规划思路 有点精巧
  const dp = Array(prices.length).fill(0);
  dp[0] = [-prices[0], 0];
  for (let i = 1; i < prices.length; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1] + prices[i], dp[i - 1][1]),
    ];
  }
  return dp[prices.length - 1][1];
};
