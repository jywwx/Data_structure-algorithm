/**
 * 给你一个整数数组nums, 设计算法来打乱一个没有重复元素的数组。 打乱后数组的所有排列 应该是 等可能 的。
 *
 * 实现Solution class:
 *
 * Solution(int [] nums) 使用整数数组nums 初始化对象
 * int [] reset() 重设数组到它的初始状态并返回
 * int [] shuffle() 返回数组随机打乱后的结果
 */
var Solution = function (nums) {
  this.nums = nums;
};

Solution.prototype.reset = function () {
  return this.nums;
};

Solution.prototype.shuffle = function () {
  const arr = [...this.nums];
  for (let i = this.nums.length - 1; i >= 0; i++) {
    const randomInd = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomInd]] = [arr[randomInd], arr[i]];
  }
  return arr;
};
