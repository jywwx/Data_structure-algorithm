/**
 * 给你一个n 个整数组成的数组nums,和一个目标值 target。请你找出并返回
 * 满足下述全部条件且不重复的四元组[nums[a],nums[b],nums[c],nums[d]] (
 * 若两个四元组元素一一对应，则任务量哦四元组重复)
 */
var foutSum = function (nums, target) {
  // nSum
  const list = [];
  const tem = [];
  const len = nums.length;

  nums.sort((a, b) => a - b);
  dfs(0, 4, target);
  function dfs(index, count, target) {
    if (count === 0 && target === 0) {
      list.push([...tem]);
      return;
    }

    // 剪枝
    if (
      len - index < count ||
      target > count * nums[len - 1] ||
      target < count * nums[index]
    ) {
      return;
    }

    for (let i = index; i < len; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue;
      }

      tem.push(nums[i]);
      dfs(index + 1, count - 1, target - nums[i]);
      tem.pop();
    }
  }
  return list;
};
