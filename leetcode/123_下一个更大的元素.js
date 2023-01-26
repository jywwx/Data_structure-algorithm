/**
 *  nums1 中数字x 的下一个更大元素使指x在nums2中对应位置右侧的第一个比x 大的元素。
 *
 *  给你两个没有重复元素的数组nums1 和 nums2，下标从0 开始计数，【其中nums1 是nums2 的子集】。
 *  对于每个0 <= i < nums1.length,找出满足nums1[i] == nums2[j]的下标j，并且在nuns2 确定
 *  nums2[j]的下一个更大元素。如果不存在下一个更大元素，那么本次查询的答案是-1。
 *  返回一个长度为nums1.length 的数组ans作为答案，满足ans[i]是如上述的下一个更大元素。
 *
 */
var nextGreaterElement = function (nums1, nums2) {
  const map = {};
  const stack = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i];
    while (stack.length && num > stack[stack.length - 1]) {
      stack.pop();
    }
    map[num] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(num);
  }
  return nums1.map((item) => map[item]);
};
