/**
 * 给你一个整数数组nums,请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 子数组之和 最大
 */
/**暴力解发 */
var maxSubArray = function (nums) {
  let ret = -Infinity;
  let count = 0;

  for (let i = 0; i < nums.length; i ++) {
     count = 0;
     for (let j = i; j < nums.length; j ++) {
        count += nums[j];
        ret = count > ret ? count : ret;
     }
  }
  return ret;
}
/**贪心解法 */
var maxSubArray2 = function (nums) {
   let ret = -Infinity;

   let count = 0;
   for (let i = 0; i < nums.length; i ++) {
      count += nums[i];

      count > ret && (ret = count);

      if (count < 0) {
        count = 0;
      }
   }
   return ret;
}

/** 动态规划算法 */
var maxSubArray3 = function(nums) {
  const dp = Array(nums.length).fill(0);
  dp[0] = nums[0];
  let ret = nums[0];
  for (let i = 0; i < nums.length; i ++) {
     dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
     ret = Math.max(ret, nums[i]);
  }
  return ret;
}