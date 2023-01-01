/**
 *给定一个整数, 写一个函数来判断它是否时 3 的冥次方。 如果是， 返回true，返回false
 */

var isPowerOfthree = function (n) {
  return n > 0 && 1162261467 % n === 0;
};
