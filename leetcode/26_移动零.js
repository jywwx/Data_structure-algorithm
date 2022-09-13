/**
 * 题目要求
 * 给定一个数组nums,编写一个函数将所有0移动到数组的末尾 同时保持非零元素的相对顺序
 * 
 * 请主要，必须在不复制数组的情况下原地对数组进行操作
 */

var moveZeros = function (nums) {
   if (nums.length === 0) {
      return 0;
   }
   let slow = 0, fast = 0;

   while (fast < nums.length) {
     if (nums[fast]) {
       [nums[slow],nums[fast]] = [nums[fast],nums[slow]];
       slow ++;
     }
     fast ++
   }
   return nums;
}
console.log(moveZeros([0,1,0,3,12]))
