/**
 * 移除元素
 *
 * 给你一个数组nums 和 一个值val, 你需要原地移除所有数值等于val的元素,
 * 并返回移除后数组的的新长度
 *
 * 不要使用额外的数组空间,你必须仅使用0(1) 额外空间原地修改输入数组
 * 元素的书黁可以改变。n你不需要考虑数组中超出新长度后面的元素
 */

/**
 *
 * @param {*} nums
 * @param {*} val
 */

var removeElement = function (nums, val) {
  // 原地  O(1) 空间复杂度 等相关 关键词 一定得使用双指针 区别是 同时一头出发快慢指针, 从头 尾出发 头尾双指针
  // [3,2,2,3] 3
  // while 解法
  if (nums.length === 0) {
    return 0;
  }
  let slow = 0,
    fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]; // fast 值覆盖slow 的值 则改变了原数组项
      // [nums[slow], nums[fast]] = [nums[fast], nums[slow]]; // 交换位置 则不改变数组项 只调换 fast slow 位置的值
      slow++;
    }
    fast++;
  }
  return nums;
};

var removeElement2 = function (nums, val) {
  if (!nums.length) {
    return 0;
  }
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return nums.slice(0, k).length;
};
let n = 0;
console.log(removeElement([3, 3, 3, 4, 5], 3));
