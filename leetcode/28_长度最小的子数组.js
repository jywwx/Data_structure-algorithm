/**
 * 给定一个含有n个正整数的数组和正整数 target。找出该数组中满足其 和 >= tartget 的长度的最小的连续
 * 子数组[nums1,nums2,nums3...] 并返回其长度。如果不存在符合条件的子数组,返回0；
 */
// 连续
/**
 *
 * @param {*} target
 * @param {*} nums
 * 滑动窗口解法 终于见到了  理解精髓 是可以动态控制窗口的大小
 * [1,2,3,4,5,6,7,8,9,10] target = 10
 * 0,3 sum = 10
 * 1 4 sum = (10 - 1) + 5
 * 2,5 sum = (14 - 2) + 6
 * 3,6 sum = ()
 * O(n)
 */
var minSubArrayLen = function (target, nums) {
  let slow,
    fast = 0;
  const len = nums.length;
  let sum = 0;
  const result = len + 1;

  while (fast < len) {
    sum += nums[fast];
    fast++;

    while (sum >= target) {
      const subLen = fast - slow;
      result = result > subLen ? subLen : result;
      sum -= nums[slow];
      slow++;
    }
  }

  return result > len ? 0 : result;
};
console.log(minSubArrayLen(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/**
 *
 * @param {*} target
 * @param {*} nums
 */
// 时间复杂度 O(n方)
var minSubArrayLen2 = function (target, nums) {
  // 暴力破解法
  const len = nums.length;
  const result = len + 1;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; i < len; j++) {
      sum += nums[j];
      if (sum >= target) {
        const subLen = j - i + 1;
        result = result > subLen ? subLen : result;
      }
    }
  }
  return result > len ? 0 : result;
};
console.log(minSubArrayLen2(10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
