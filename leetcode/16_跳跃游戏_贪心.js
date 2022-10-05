/**
 *  给定一个非负整数数组nums, 你最初位于数组的第一个下标。数组中的每个元素玳比啊你在该位置 可以跳跃 的最大长度
 *  判断你是否能够到达最后一个下标
 */

/**
 * 示例
 * 输入: nums = [2,3,1,1,4];
 * 输出: true
 * 解释: 可以先跳1步, 从下标到达1, 然后 再从下标1 跳3 步到达最后一个下标
 */
/**
 * 
 * @param {*} nums 
 */
var canJump = function (nums) {
   // 每次跳跃 取一次累加值  累加值 与当前索引位置的值 取最大值 再根据累加值循环
   let cover = 0; 
   for (let i = 0; i <= cover; i ++) {
      cover = Math.max(cover,i + nums[i]);
      if (cover > nums.length - 1) {
        return true;
      }
   }
   return false;
}

const nums = [1,1,1,1,4];
console.log(canJump(nums))