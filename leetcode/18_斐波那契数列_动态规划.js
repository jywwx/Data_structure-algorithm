const nums = [];
// 递推思想
var feibonaci = function (n) {
  if (n <= 1) {
    return n;
  }
  return feibonaci(n - 1) + feibonaci(n - 2);
};

var feibonaci = function (n) {
  // 推导公式
  // dp[i] 就是第i个值的数字
  // dp[i] = dp[i-1] + dp[i+1]
  // 初始化 [0,1]
  const dp = [0, 1];
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];

  // 还有优化思路
  // 数组优化成两个数字
  // 数学公式
  // 还可以用矩阵去优化公式中浮点数的N次方计算
};

function helper(memo, n) {
  if (n <= 1) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = helper(memo, n - 1) + helper(memo, n - 2);
  return memo[n];
}

var fib = function (n) {
  const memo = [];
  return helper(memo, n);
};

var fib2 = function (n) {
  if (n <= 1) {
    return n;
  }
  let dp1 = 0,
    dp2 = 1;
  for (let i = 2; i < n; i++) {
    const dp3 = dp1 + dp2;
    dp1 = dp2;
    dp2 = dp3;
  }
  return dp1 + dp2;
};

console.log(feibonaci(7));
