/**
 * 给你一个整数数组nums。如果任一值在数组中出现至少两次，返回true，如果数组中没个元素互不相同，返回false。
 */

var containsDuplicate = function (nums) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in cache) {
      cache[nums[i]] += 1;
    } else {
      cache[nums[i]] = 1;
    }
  }
  return Object.values(chache).some((item) => item > 1);
  // return new Set(nums).size !== nums.length;

  // 牺牲时间复杂度 优化空间复杂度

  //   nums.sort((a, b) => a - b);
  //   for (let i = 0; i < nums.length - 1; i++) {
  //     if (nums[i] === nums[i + 1]) {
  //       return true;
  //     }
  //   }
  //   return false;
};
