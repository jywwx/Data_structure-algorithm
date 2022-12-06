/**
 * 给定一个整数数组prices,其中prices[i]表示第i天的股票价格;
 * 整数fee代表了交易股票的手续费用。
 * 
 * 你可以无限次地完成交易，但是你每笔交易都需要付手续费。如果
 * 你已经购买了一个股票，在卖出他之前你就不能在继续购买股票了。
 * 
 * 
 * 返回获得利润的最大值。
 * 注意：这里的一笔交易指买入持有并卖出股票的整个过程，眉笔交易你
 * 只需要为支付一次手续费。
 * 
 */
var maxProfit = function (prices,fee) {
    let ret = 0;
    let minPrice = prices[0];

    for (i = 0; i < prices.length; i ++) {
        if (prices[i] < minPrice) {
           minPrice = prices[i];
        }

        if (prices[i] > minPrice && prices[i] <= minPrice + fee) {
          continue;
        }

        if (prices[i] > minPrice + fee) {
           ret += prices[i] - minPrice - fee;
           minPrice = prices[i] - fee;
        }
    }

    return ret;
}

var maxProfit2 = function (prices,fee) {
   const len = prices.length;
   let has = -prices[0] - fee;
   let notHas = 0;

   for (let i = 1; i < len; i ++) {
      has = Math.max(has, notHas - prices[i] - fee);
      notHas = Math.max(notHas, has + prices[i]);
   }

   return notHas;
}
