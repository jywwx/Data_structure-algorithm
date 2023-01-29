/**
 * 有序数组的平方
 * @param {*} nums
 */
var sortedSquares = (nums) => {
  if (nums.length === 0) {
    return nums;
  }

  let start = 0,
    end = nums.length - 1,
    k = nums.length - 1;

  while (start <= end) {
    const rv = nums[end] * nums[end];
    const lv = nums[start] * nums[start];
    if (rv > lv) {
      nums[k] = rv;
      end--;
    } else {
      nums[k] = lv;
      start++;
    }
    k--;
  }
  return nums;
};
