/**
 * 给定一个n个元素有序的（升序）整数数组 nums 和 一个目标值target，写一个函数搜索nums 中的target，如果目标值存在返回下标 否则返回-1；
 */
/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
var search = function (nums,target) {
  return nums.indexOf(target);
}

/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
var search2 = function (nums,target) {
    if (!nums.length) {
       return -1;
    }
   const left = 0, right = nums.length - 1;
   const mid = (left + right) >> 1;
   if (target > nums[mid]) {
     return search2(nums.slice(mid + 1),target);
   } else if (target < nums[mid]) {
     return search2(nums.slice(0, mid),target)
   } else if (target === nums[mid]) {
     return mid;
   }
}
/**
 * 经典二分思想基础实践题
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
var search3 = function(nums,target) {
    let left = 0, right = nums.length - 1;  // left 与 right 的边界值问题
    while (left <= right) {        // 是小于 还是小于等于 
       const mid = (left + right) >> 1; // mid 求值的越界问题
       // const mid = left + ((right - left) >> 1);
       // 其实这么写 也有小隐患  最稳妥的办法 是位运算
       // left right 相加，可能会越界 超过 数组本身的长度；
       if (target > nums[mid]) {
          left = mid + 1;
       } else if (target < num[mid]) {
          right = mid;
       }
       return mid;
    }
    return -1;
}