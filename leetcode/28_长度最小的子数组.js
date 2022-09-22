/**
 * 给定一个含有n个正整数的数组和正整数 target。找出该数组中满足其 和 >= tartget 的长度的最小的连续
 * 子数组[nums1,nums2,nums3...] 并返回其长度。如果不存在符合条件的子数组,返回0；
 */
// 连续
/**
 * 
 * @param {*} target 
 * @param {*} nums 
 * 滑动窗口解法 终于见到了  理解精髓 是可以动态控制窗口的大小
 */
var minSubArrayLen = function (target,nums) {
   let slow = 0, fast = 0, sum = 0;
   const len = nums.length ;
   let result = len + 1;

   while (fast < len) {
     sum += nums[fast ++];
     if (sum >= target) {
       const subLen = fast - slow;
       result = result > subLen ? subLen : result;
       sum -= nums[slow ++]
     }
   }

   return result > len ? 0 : result;
}


/**
* 
* @param {*} target 
* @param {*} nums 
*/
var minSubArrayLen2 = function (target,nums) {
    // 暴力解法
    const len = nums.length;
    let result = len + 1;
    for (let i = 0; i < len; i ++) {
        let sum = 0;
       for (let j = i; j < len; j ++) {
        sum += nums[j];  
        if (sum >= target) {
            const subLen = j - i + 1;
            sum > result && (result = subLen)
            break;
        }
       }
    }
    return result > len ? 0 : result;
}