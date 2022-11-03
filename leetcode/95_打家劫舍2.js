/**
 * 你是一个专业的小偷,计划偷窃沿街的房屋，每间房内都藏有一定的现金
 * 。这个地方所有的房屋都围城一圈，这意味着第一个房屋和最后一个房屋
 * 是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间
 * 相邻的方位在同一晚上被小偷闯入，系统会自动报警。
 * 
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报
 * 装置的情况下，今晚能够偷窃到的最高金额。
 */

var rob = function(nums) {



  const len = nums.length;
  if (len === 0) {
    return 0;
  }
  if (len === 1) {
     return nums[0];
  }

  const robRange = (start,end,nums) => {
    if (start === end) {
      return nums[start];
    }

    const dp = [nums[start], Math.max(nums[start],nums[start + 1])];

    for (let i = start + 2; i <= end; i ++) {
       dp[i] = Math.max(dp[i - 1],dp[i - 2] + nums[i]);
    }

    return dp[end];
  }

  return Math.max(robRange(0,nums.lengt -2),robRange(1,nums.length -1));
}