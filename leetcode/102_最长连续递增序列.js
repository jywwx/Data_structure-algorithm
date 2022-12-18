/**
 * 给定一个未经排序的整数数组,找到最长且连续递增的子序列，并返回该序列的长度。
 * 
 * 连续递增的子序列 可以由两个下标l 和 r（l < r） 确定，如果对于每个 l <= i < r,
 * 都有nums[i] < nums[i + 1], 那么子序列 [nums[l],nums[l + 1],...,nums[r - 1],nums[r]]
 * 就是连续递增子序列。
 */

var findLengthOfLCIS = function (nums) {
  //dp[i]  i 下标之前的数组的连续递增子序列的长度是dp[i];
  // dp[i] = dp[i - 1] + 
  // 推导后面一个
//   const dp = Array(nums.length).fill(1);
//   for (let i = 0; i < nums.length -1; i ++) {
//      if (nums[i + 1] > nums[i]) {
//        dp[i + 1] = dp[i] + 1
//      }
//   }
//   return Math.max(...dp);

  // 推导当前i
  const dp = Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i ++) {
    if (nums[i] > nums[i - 1]) {
      dp[i] = dp[i - 1] + 1;
    }
  }
  return Math.max(...dp);
}