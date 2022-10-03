/**
 * 删除有序数组中的重复项
 * 给你一个升序排列的数组nums,请你!!!原地!!!删除重复出现的元素,使每个元素只出现一次, 返回删除后的数组的新长度。
 * 元素的相对顺序 应该保持一致
 */

/**
 * 大前提条件 数组升序排列
 * @param {*} nums 
 * 本题可以用暴力破解 建新数组 
 * 题目要求不使用额外空间
 * 也可以使用set
 * 数组原地去重 
 * 时间复杂度 O(n) 空间复杂度 O(1);
 */
// 本题目解题思路 快慢指针 
// slow fast 
var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let slow = 0, fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow ++;
      nums[slow] = nums[fast]
    }
    fast ++;
  }
  return slow + 1;
}

const nums = [1,1,2,2,3,4,];

console.log(removeDuplicates(nums),"nums")

