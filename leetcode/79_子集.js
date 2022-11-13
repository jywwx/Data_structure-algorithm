/**
 * 给你一个整数数组nums，数组中的元素互不相同。返回该数组所有可能的子集（幂集）。
 */
/**
 * 
 * @param {*} nums 
 * @returns 
 */
var subsets = function (nums) {
    const ret = [];
    const path = [];
    backtrack(0);
    return ret;

    function backtrack(index) {
      ret.push(...path);

      for (let i = index; i < nums.length; i ++) {
         path.push(nums[i]);
         backtrack(index + 1);
         path.pop();
      }
    }
}

console.log(subsets(['1','2','3']))