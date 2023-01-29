// 搜索 排序 都是基础问题
// 排序算法: 如何吧一个数组变成有序的
// arr = [3,2,1,4]
// 增删改查几个操作

var sortArr = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
};
console.log(sortArr([3, 2, 1, 4]), "arrs");
