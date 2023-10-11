/**
 * 给你一个n 个整数组成的数组nums,和一个目标值 target。请你找出并返回
 * 满足下述全部条件且不重复的四元组[nums[a],nums[b],nums[c],nums[d]] (
 * 若两个四元组元素一一对应，则任务量哦四元组重复)
 */
var foutSum = function (nums, target) {
  // nSum
  const list = [];
  const len = nums.length;
  const temp = [];
  nums.sort((a, b) => a - b);
  function dfs(index, count, target) {
    if (count === 0 && target === 0) {
      list.push(temp);
      return;
    }

    // 剪枝
    if ((nums.length - index < count) || (nums[i] > target) || (count * nums[nums.length - 1]) < target) {
      return;
    }

    for (let i = index; i < len; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue;
      }

      temp.push(nums[i]);
      dfs(index + 1, count - 1, target - nums[i]);
      temp.pop();
    }
  }
  dfs(0, 4, target);
  return list;
};
