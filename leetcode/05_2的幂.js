// 题目描述 给定一个整数 判断 n 是否是 2 的幂次方 n === X个2 相乘

/**
 *
 * @param {*} n
 */
// 算法的时间复杂度是 O(log2^n)
const isPoerOfTwo = (n) => {
  while (n > 2) {
    if (n % 2 === 1) {
      return false;
    }
    n = n >> 1;
  }
};

/**
 *
 * @param {*} n
 * @returns
 *
 * 原理解释  所有2 的幂次方的 二进制数字的特点 第一位是1 其余位是0  n - 1 的二进制特点 第一位是0 其余位是1  所以采用( n & n - 1) ==== 0来判断
 */
// 时间复杂度为O(2)
const isPoerOfTwo2 = (n) => {
  return n > 0 && n & (n - 1);
};

console.log(isPoerOfTwo(1), "isPoerOfTwo(128)");
