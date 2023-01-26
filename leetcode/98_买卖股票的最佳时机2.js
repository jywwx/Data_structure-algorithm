/**
 * 给你一个整数数组prices,其中prices[i]表示某只股票第i天的价格
 * 在每一天，你可以决定是否购买和或出售股票。你在任何时候最多
 * 只能持有一股股票。你也可以先购买，然后同一天出售。
 * 返回你能获得的最大利润。
 *
 * 可以多次买卖 但是每天只能持有一只股票
 *
 * 不限购买出售次数
 */
var maxProfit = function (prices) {
  // 贪心算法
  let ret = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      ret += prices[i] - prices[i - 1];
    }
  }
  return ret;
};

var maxProfit2 = function (prices) {
  let has = -prices[0];
  let notHas = 0;

  for (let i = 1; i < prices.length; i++) {
    has = Math.max(notHas - prices[i], has);
    notHas = Math.max(has + prices[i], notHas);
  }
  return notHas;
};

const prices = [1, 2, 1, 9];
console.log(maxProfit2(prices), "///");
