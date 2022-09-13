/**
 * 在函数里修改输入数组对于调用者是可见色
 * 根据你的函数返回的长度,它会打印出数组中 该长度范围内的所有元素
 */


/**
 * 移除元素
 * 
 * 给你一个数组nums 和 一个值val, 你需要原地移除所有数值等于val的元素,
 * 并返回移除后数组的的新长度
 * 
 * 不要使用额外的数组空间,你必须仅使用0(1) 额外空间原地修改输入数组
 * 元素的书黁可以改变。n你不需要考虑数组中超出新长度后面的元素
 */

/**
 * 
 * @param {*} nums 
 * @param {*} val 
 */

var removeElement = function (nums,val) {

    // 原地  O(1) 空间复杂度 等相关 关键词 一定得使用双指针 区别是 同时一头出发快慢指针, 从头 尾出发 头尾双指针 
    // [3,2,2,3] 3
    // while 解法
   if (nums.length === 0) {
     return 0;
   }
   let slow = 0, fast = 0;

   while (fast < nums.length) {
     if (nums[fast] !== val) {
       nums[slow] = nums[fast];
       slow ++
       //  |
       // nums[slow ++] = nums[fast];
     }
     fast ++;
   }

   return slow;
}


var removeElement2 = function (nums,val) {
   if (nums.length === 0) {
      return 0
   }
   // 单指针加循环 本质上也是
   let k = 0;
   for (let i = 0; i < nums.length; i ++) {
     if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
      // |
      // nums[k++] = nums[i];
     }
   }
   return k;
}
let n = 0;
console.log(removeElement2([3,3,3,4,5],3))