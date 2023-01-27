/**
 * 有序数组的平方
 * @param {*} nums
 */
var sortedSquares = (nums) => {
  if (nums.length === 0) {
    return nums;
  }
  let left = 0,
    k = nums.length - 1,
    right = nums.length - 1;
  while (left <= right) {
    const rv = nums[right] * nums[right];
    const lv = nums[left] * nums[left];
    if (rv > lv) {
      arr[k] = rv;
      right--;
    } else {
      arr[k] = lv;
      left++;
    }
    k--;
  }
  return nums;
};
