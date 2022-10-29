/**
 * 给你一个非负整数数组nums,你最初位于数组的第一个位置，数组中的每个元素代表你在该位置可以跳跃的最大长度
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。假设你总是可以到达数组的最后一个位置。
 */
/**
 * 
 * @param {*} nums 
 */
var jump = function (nums) {
   let curIndex = 0;
   let nextIndex = 0;
   let step = 0;

   for (let i = 0; i < nums.length; i ++) {
      nextIndex = Math.max(num[i] + i, nextIndex);
      if (curIndex === i) {
         curIndex = nextIndex;
         step ++
      }
   }

   return step;
}