/**
 * 给定一个数组，他的第i给元素是一支给定的股票在第i天的价格。
 * 设计一个算法来计算你能获取的最大利润。你最多可以完成两笔交易
 * 。
 * 
 * 注意： 你不能同时参与多笔交易（你必须在再次购买前出售调之前的股票）。
 */
var maxProfit = function (prices) {
      const len = prices.length;
      const dp = Array(len).fill(0).map(x => {
        return new Array(5).fill(0);
      })
      dp[0][1] = -prices[0];
      dp[0][3] = -prices[0];

      for (let i = 1; i < len; i ++) {
         dp[i][0] = dp[i-1][0];
         dp[i][1] = Math.max(dp[i-1][1],dp[i-1][0] - prices[i]);
         dp[i][2] = Math.max(dp[i-1][2],dp[i-1][1] + prices[i]);
         dp[i][3] = Math.max(dp[i-1][3],dp[i-1][2] - prices[i]);
         dp[i][2] = Math.max(dp[i-1][4],dp[i-1][3] + prices[i]);
      }

      return dp[len - 1][4];
}