/**
 * 给定一个循环数组nums(nums[nums.length - 1])的下一个元素是nums[0]，返回nums中每个元素的下一个更大元素。
 *
 * 数字x的下一个更大的元素 是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环的搜索它下一个更大的数。
 * 如果不存在，则输出-1.
 */
var nextGreaterElement = function (nums) {
  const len = nums.length;
  const res = Array(len).fill(-1);
  const stack = [];

  for (let i = 0; i < len * 2; i++) {
    const num = nums[i % len];
    while (stack.length && num > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      res[index] = num;
    }
    stack.push(i % len);
  }
  return res;
};
