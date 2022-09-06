// 三数之和
// 给一个包含n个整数的数组nums 判断 nums中是否存在三个元素 a,b,c,使得 a + b + c = 0 ? 请找出 所有和为 0 且不重复的三元组
/**
 * 
 * @param {*} nums 
 */
const threeSum = (nums) => {
   // 找到 a,b,c
   // 无序数组里, 查找目标和大小相关  就可以看下是否可以利用排序降低复杂度 意思就是要先排序
   // 排序算法 时间复杂度 为 O(n * log2^n);  
   const List = [];
   // 最先 
   //nums = [1,2,3,4,6,8,-5,7,8]
   // 提出第一个元素 1
   // [2,3,4,6,8,-5,7,8]
   // 最小的 + 最大之和 如果比目标值大 说明小 缩小这个值  最大值 左移 否则 最小值右移
   nums.sort((a,b)=> a-b);
   for (let i = 0; i< nums.length; i ++) {
      if (nums[i] === nums[i -1 ]) {
        continue;
      }
      // nums[i] 为基准 找另外两个数组 数组之和 等于 -nums[i]

      let left = i + 1;
      let right = nums.length - 1;
      
      while (left < right) {
         if (nums[left] + nums[right] + nums[i] === 0) {
          // 命中
          List.push([nums[left],nums[right],nums[i]])
          while (nums[left] === nums[left + 1]) {
            left ++;
          }
          left ++;
          while (nums[right] === nums[right - 1]) {
            right --
          }
          right --;
         } else if (nums[left] + nums[right] + nums[i] > 0) {
            right --
         } else {
            left ++;
         }
      }
   }
   return List;
}
// console.log(threeSum([-4,-1,-1,0,1,2]));



var threeSum2 = (nums) => {
  const List = [];
  
  nums.sort((a,b)=> a - b);

  for (let i = 0; i < nums.length; i ++) {
     if (nums[i] === nums[i-1]) {
       continue;
     }
     let left = i + 1;
     let right = nums.length -1;

     while (left < right) {
        if (nums[left] + nums[right] + nums[i] === 0) {
         List.push([nums[left],nums[right],nums[i]]);
         while (nums[left + 1] === nums[left]) {
           left ++
         }
         left ++;

         while(nums[right -1] === nums[right]) {
          right --;
         }
         right --;
        } else if (nums[left] + nums[right] + nums[i] > 0) {
          right --;
        } else {
         left ++;
        }
     }
  }
  return List;
}
console.log(threeSum2([-4,-1,-1,0,1,2]));



// 手写一个闭包
function closeure () {
    const a = 1;
    var retFun = function () {
        return a;
    }
    return retFun;
}


// console.log(closeure()(),"9001")