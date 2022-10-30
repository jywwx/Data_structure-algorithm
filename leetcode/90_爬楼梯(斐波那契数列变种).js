/**
 * 假设你正在爬楼梯。需要n阶你才能到达楼顶
 * 
 * 每次你可以爬1 或者 2个台阶。 你有多少种不同的方法可以爬到楼顶
 */

var climStairs = function (n) {
  const dp = [1,2];
  for (let i = 2; i < n; i ++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
}