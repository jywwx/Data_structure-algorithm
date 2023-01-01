/**
 *给定两个数组nums1 和 nums2， 返回它们的交集。

 输出结果中的每个元素一定是唯一的。 我们可以不考虑输出结果的顺序。
 */

var intersection = function (nums1, nums2) {
  const retSet = new Set();
  const num1Set = new Set(nums1);

  for (let i = 0; i < nums2.length; i++) {
    if (num1Set.has(nums2[i])) {
      retSet.add(nums2[i]);
    }
  }
  return retSet;
};

var intersection2 = function (nums1, nums2) {
  return [...new Set(nums1.filter((i) => nums2.include(i)))];
};
