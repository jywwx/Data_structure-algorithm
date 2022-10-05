/**
 * 给你一个非负整数x，计算并返回x 的算数平方根。
 * 由于返回数据是整数，结果只保留 整数部分，小数部分将被舍去。
 * 
 * 注意：不允许使用任何内置指数函数和算符， 例如
 * pow(x,0.5) 或者 x ** 0.5；
 */

var mySqrt = function (x) {
   let left = 0, right = x;

   while (left <= right) {
      const mid = left + ((right - left) >> 1);
      if (mid * mid > x) {
        right = mid - 1;
      } else if (mid * mid < x) {
        left = mid + 1;
      } else if (mid * mid ===x) {
        return mid;
      }
   }
   return right;// return left - 1;
}

// 边界问题 想不清楚啊 应该不会问到这么细致 除非让你手撸代码