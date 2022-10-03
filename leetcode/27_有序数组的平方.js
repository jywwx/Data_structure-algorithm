
/**
 * 有序数组的平方
 * @param {*} nums 
 */
var sortedSquares = (nums) => {
  if (nums.length === 0) {
    return nums;
  }
  let left = 0, k = end = nums.length - 1;
  const arr = Array(nums.length);
  while (left <= right) {
    const rv = nums[right] * nums[right];
    const lv = nums[left] * nums[left];
    if (rv > lv) {
      arr[k] = rv;
      right --;
    } else {
      arr[k] = lv;
      left --;
    }
    k--;
  }
  return arr;
}