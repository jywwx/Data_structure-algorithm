// 冒泡排序
let arr = require('./arr');
// 时间复杂度  O(n*n) 严格的讲 是log(n * (n/2))
const cur = arr[0];
console.log(arr)
// console.log(arr.sort((a,b) => b - a))
const bubbleSort = (arr) => {
    const len = arr.length - 1;
    for (let i = 0; i< len; i ++) {
      for (let j = 0; j < len - j; j ++) {
        if (arr[j] > arr[j + 1]) {
           [arr[j],arr[j + 1]] = [arr[j+1],arr[j]]
        }
      }
    }
    return arr;
}
// console.log(bubbleSort(arr),'bubbleSort')


// 二分查找 快速排序
// 时间复杂度 O(n*log2^N)  本文 log 函数 ^ 前面的 为底数 N 为真数   log2^N 等于 2 的多次方 等N
// 空间复杂度 也是 O(n*log2^n)
function quickSort (arr) {
   if (arr.length < 2) {
      return arr;
   }
   const left = [];
   const right = [];
   const flag = arr[0]; // 随机从数组当中取一个标志位
   const len = arr.length;
   for (let i = 1; i < len; i ++) {
      if (arr[i] > flag) {
        right.push(arr[i]);
      } else {
        left.push(arr[i])
      }
   }
   return quickSort(left).concat(flag,quickSort(right));
}
// console.log(quickSort(arr),"quickSort(arr)")


// 原地快速排序
// 双指针遍历 
// e flag值
// i 向右移动 j 向左移动
//  i ->         <-j
// 【d,a,b,c,e,f,g,h】
//  i 找到一个比 e 大的
// j 找到一个比e 小的
// i 和 j 的值交换下位置
// 当 i j 即两个指针 亦即 数组的索引值 相遇的时候
// 空间复杂度O(1);
function quick1(arr,start,end) {
  // 当前方法的逻辑就是 取 数组的第一个标志位 把 小于标志位放左边 大于标志位的放右边
  // 数组双指针遍历法
  // flag 不能是重复的元素
  const init = start;
  const flag = arr[init];

  start ++;
  while (start <= end) {
    while (arr[end] > flag) {
      end --;
    }
    while (arr[start] < flag) {
      start ++;
    }
    if (start < end) {
      [arr[start],arr[end]] = [arr[end],arr[start]];
      end --;
      start ++;
    }
  }
  [arr[init],arr[start-1]] = [arr[start-1],arr[init]]
  return start;
}

function quickSort2(arr,start,end) {
  if (start < end) {
     let index = quick1(arr,start,end); // 标志位的索引值
     quickSort2(arr,start,index -1);
     quickSort2(arr,index,end);
  }
  return arr;
}
console.log(quickSort2(arr, 0, arr.length -1),arr,"quickSort2(arr)")