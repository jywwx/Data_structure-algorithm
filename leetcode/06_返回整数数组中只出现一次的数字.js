// 题目描述 文件标题 不占用额外空间 时间复杂度为 O^n 线性复杂度

const nums = [1,2,2,3,3]

//解题原理1
// 建立哈希表 标识每个元素出现了一次
// 时间复杂度 0(n^2)  空间复杂度 0^n 
const onceNum = (nums) => {
  const cache = {};
  nums.forEach((num) => {
    if (cache[num]) {
        cache[num] += 1;
    } else {
        cache[num] =  1
    }
  });
  return Object.entries(cache).filter(([key,value]) => value === 1)[0][0];
}

// 针对上面优化算法
// 时间复杂度为O(n) 占用了一点点的额外空间
const onceNumSub = (nums) => {
   const cache = new Map();
   nums.forEach((item) => {
     if (cache.has(item)) {
       cache.delete(item);
     } else {
        cache.set(item,item);
     }
   })
   return cache.keys().next().value;
}


// 解题原理2 ^ 采用异或  时间复杂度o(n) 不占用额外空间
// ^ 异或  只要相对比的两个位置的数字 都相等 0 ^ 0 = 1;1 ^ 1 = 0; 1 ^ 0 = 1; 0 ^ 1 = 0;
// 11 ^ 11 = 00 = 0;
// 10 ^ 01 = 11 = 3
// 最优解
const onceNum2 = (nums) => {
    let ret = 0;
    nums.forEach((item) => (ret ^= item));
    return ret;
}

console.log(onceNum2(nums),"nums")