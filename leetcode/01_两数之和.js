const nums = [2, 7, 11, 15];

//题目要求 返回数组的两个树之后 等于 目标值得 索引 切该数组只有唯一解
/**
 *
 * @param {*} nums
 * @param {*} target
 * @returns Array<number>
 */
// 时间复杂度为O(n^2)
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i !== j) {
        return [i, j];
      }
    }
  }
};

/**
 *
 * @param {*} nums
 * @param {*} target
 * @returns
 */
// 时间复杂度为O(n)
// forEach 不可中断返回
// 题目要求 算法时间复杂度为o(n) 找出数组当中的两个数的和为target 目标值
const twoSum2 = (nums, target) => {
  const hastab = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const curNum = target - num;
    if (num in hastab) {
      return [hastab[num], num];
    } else {
      hastab[curNum] = num;
    }
  }
};

console.log(twoSum2(nums, 9));
