/**
 *  给你一个下标从1 开始的整数数组numbers, 该数组已按 非递减顺序排列, 请你从数组中找出满足相加之和等于目标数target的两个数。
 *  如果这两个数分别是numbers[index1] 和numbers[index2]，则1 <= index1 < index2 <= numbers.length。
 *  以长度为2的整数数组[index1,index2] 的形式返回这两个整数的下标 index1 和 index2。
 *  你可以假设每个输入只对应唯一的答案,而且你不可以重复使用相同元素。
 *  你所设计每个输入只对应唯一的答案,而且你不可以重复使用相同的元素。
 *  你所设计的解决方案 必须只使用常量级的额外空间
 */

/**
 * 空间复杂度为 O(1);
 */
/**
 * 
 * @param {*} numbers 
 * @param {*} target 
 */
var twoSum = function (numbers,target) {
   if (numbers.length === 0) {
     return [];
   }

  //  const ret = [];
  //  for (let i = 0; i < numbers.length; i++) {
  //     let start = i;
  //     while (start < numbers.length - 1) {
  //       if (numbers[start] + numbers[i] === target) {
  //         ret.push(i + 1,start + 1);
  //         return ret;
  //       }
  //       start ++;
  //     }
  //  }
  //  return []

  let start = 0, end = numbers.length - 1;
  while (start <= end) {
    if (numbers[start] + numbers[end] === target) {
      return [start+1, end + 1]
    } else if (numbers[start] + numbers[end] - target > 0) {
      end --
    } else {
      start ++
    }
  }
  return [];

}


/**
 * 参考相关思路 三数之和
 */
var threeSum = function (numbers,target) {
  numbers.sort((a,b) => a - b);

  const list = [];
  for (let i = 0; i < numbers.length; i ++) {
     if (numbers[i] === numbers[i -1]) {
       continue;
     }
     let start = i, end = numbers.length - 1;

     while (start < end) {
        if (numbers[start] + numbers[end] + numbers[i] === target) {
          list.push(numbers[start], numbers[end], numbers[i]);
          
          while (numbers[start + 1] === numbers[start]) {
            start ++
          }
          start ++;

          while (numbers[end -1] === numbers[end]) {
            end --
          }
          end --
        } else if (numbers[start] + numbers[end] + numbers[i] - target > 0) {
          end --
        } else {
          start ++
        }
     }
  }
}

console.log(twoSum([1,2,3,4],4))