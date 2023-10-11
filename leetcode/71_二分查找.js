/**
 * 给定一个n个元素有序的（升序）整数数组 nums 和 一个目标值target，写一个函数搜索nums 中的target，如果目标值存在返回下标 否则返回-1；
 */
/**
 *
 * @param {*} nums
 * @param {*} target
 * @returns
 */
var search = function (nums, target) {
  return nums.indexOf(target);
};

/**
 *  二分递归查找
 * @param {*} nums
 * @param {*} target
 * @returns
 */
var search2 = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  let mid = (left + right) >> 1;
  if (target > nums[mid]) {
    return search2(nums.slice(mid, right), taget);
  } else if (target < nums[mid]) {
    return search2(nums.slice(0, mid - 1), target);
  } else {
    return mid;
  }
};
/**
 * 经典二分思想基础实践题
 * @param {*} nums
 * @param {*} target
 * @returns
 */
var search3 = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left < right) {
    const mid = (left + right) >> 1;
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid;
    } else {
      return mid;
    }
  }
  return -1;
};
console.log(search3([1, 2, 3, 4, 5], 4));
