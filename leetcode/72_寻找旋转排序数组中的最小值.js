/**
 * 已知一个长度为n的数组，预先按照升序排列，经由1 到 n 次旋转后，得到输入数组。 例如，原数组 nums = 【0,1,2,4,5,6,7】在变化后可能得到：
 *    [0,1,2,3,4,5,6,7]
 *    旋转一次
 *    [1,2,3,4,5,6,7,0]
 *    旋转两次
 *    [2,3,4,5,6,7,0,1]
 *    旋转三次
 *    [3,4,5,6,7,0,1，2]
 *    旋转4次
 *    [4,5,6,7,0,1,2,3]
 *    若旋转4 次， 则可以得到[4,5,6,7,0,1,2];
 *    若旋转7 次， 则可以得到[0,1,2,4,5,6,7];
 * 
 *    注意 数组[a[0],a[1],a[2],...,a[n-1]] 旋转一次的结果为数组[a[n-1]],
 *    a[0],a[1],a[2],...a[n-1]]
 * 
 *  给你一个元素值互不相同的数组nums, 它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的最小元素。
 * 
 *  你必须设计一个时间复杂度为0(log n) 的算法解决此问题。
 */

var findMin = function (nums) {
   let left = 0, right = nums.length -1;

   while (left < right) {
     const mid = left + ((right -left) >> 1);

     if (nums[mid] > nums[right]) {
       left = mid + 1
     } else if (nums[mid] < nums[right]) {
        right = mid;
     }
   }
   return nums[left];
}