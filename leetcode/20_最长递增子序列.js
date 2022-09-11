/**
 * 给你一个整数数组nums，找到其中最长的严格递增子序列的长度
 * 
 * 
 * 子序列是由数组派生而来的序列, 删除(或不删除) 数组中的元素而不改变其余元素的顺序,例如，[3,6,2,7]是数组
 * [0,3,1,6,2,2,7] 的子序列
 */
// 返回严格递增子序列长度
/**
 * 
 * @param {*} nums 
 */
var lengthOfLIS = function (nums) {
    // [0,1,0,3,2,3]
    // 选择极值
    // 
    // dp[]  的意思是, 在i 位置以前的数组, 最长递增子序列的长度
    // 建立一个空数组 默认都是 1  
    // 遍历目标数组 
    //  __遍历到数组的i 值时  
    //    __再遍历 小区i 的数值  j 当j 值 小于 i 值 i 目标位置上的 += 1；


    // 边界条件 空数组 返回 0

    // 递推公式 dp[i] = 小于dp[i]值的 count + 1
    // 索引值 i,j 如果 nums[j] < nums[i] dp[i] + 1


    /** 
    const n = nums.length;
    if (n === 0) {
       return 0;
    }

    const dp = Array(n).fill(1);
    for (let i = 0; i < n; i ++) {
      for (let j = 0; j < i; j ++) {
         dp[i] = Math.max(dp[i], dp[j] +1);
      }
    }
    return Math.max(...dp); */
    //以上是动态规划解法

    // 贪心算法解法  贪心 + 二分算法解决

    // 在贪心算法的逻辑下
    // 让子序列 尽可能增长的慢
    // [1,3,5] 就比[1,4,5] 要好一些

    const n = nums.length;
    if (n === 0) {
      return 0;
    }
    const arr = [nums[0]];
    for (let i = 0; i < n; i ++) {
      if (nums[i] > arr[arr.length - 1]) {
        arr.push(nums[i])
      } else {
        // 找到arr 中第一个比nums[i]大的数字 修改它
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
          let mid = (left + right ) >> 1;
          if (arr[mid] < arr[i]) {
            left = mid + 1
          } else {
            right = mid;
          }
        }
        arr[left] = nums[i];
      }
    }
    return arr.length 
}



// 回想  二分查找 数组原地排序
var quickSort = function (start,end,nums) {
  let init = nums[start];
  const flag = nums[init];
  start ++;

  while (start <= end) {
    while (nums[end] > flag) {
      end --;
    }
    while (nums[start] < flag) {
      start --
    }

    if (start < end) {
      [nums[start],nums[end]] = [nums[end],nums[start]];
      start ++;
      end --;
    }
  }

  [nums[init],nums[start-1]] = [nums[start -1],nums[init]];
  return start;
}

var quickSort1 = function(nums,start,end) {
  if (start < end) {
     let index = quickSort(start,end,nums);
     quickSort1(nums,start,index - 1);
     quickSort1(nums,index,end);
  }
}

console.log(lengthOfLIS([0,1,0,3,2,3]))