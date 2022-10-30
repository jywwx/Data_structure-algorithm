/**
 * 使用最小的花费去爬楼梯
 * 
 * 给你一个整数数组cost，其中cost[i]是从楼梯第i个台阶向上爬需要支付的费用。一旦你支付此费用，即可选择向上爬一个或者两个台阶。
 * 
 * 你可以选择从下标为0 或下标为1 的台阶开始爬楼头。
 * 请你计算并返回到达楼顶的最低花费。
 */
// 规划这个最小值
// dp 你到第i个台阶所需要的最小花费，是do[i];
var minCostClimbingStairs = function (cost) {
   const dp = [cost[0],cost[1]];
   for (let i = 2; i < cost.length; i ++) {
     dp[i] = Math.min(dp[i - 1],dp[i - 2]) + cost[i];
   }
   return Math.min(dp[cost.length - 1], dp[cost.length - 2]);
}