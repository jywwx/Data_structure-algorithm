/**
 * 给你一个按 非递减顺序的排序的整数数组nums, 返回每个数字的平凡组成的新数组,要求也按照非递减顺序排序
 */

/**
 * nums = [-4,-1,0,3,10]
 * 输出 [0,1,9,16,100]
 * 解释: 平方后,数组变为[16,1,0,9,100]
 * 排序后,数组变为[0,1,9,16,100]
 * 要求时间复杂度为O(n)
 */

var sortedSquares = function (nums) {
  // 暴力破解
  //return nums.map((num) => num * num).sort((a,b) => a - b);

  //[-4,-1,0,3,10]
  if (nums.length === 0) {
     return [];
  }

  let left = 0, right = nums.length - 1;

  const arr= Array(nums.length);
  let k = right;

  while (left <= right) {
    const r = nums[right] * nums[right];
    const l = nums[left] * nums[left];
    if (l < r) {
      arr[k] = r;
      right --;
    } else {
      arr[k] = l;
      left ++;
    }
    k--;
  }
}