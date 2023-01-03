/**
 *给定一个整数数组temperatures,便是每天的温度,返回一个数组answer，其中answer[i]是指
 在第i天之后，才会有更高的温度。 如果气温在这之后都不会升高，请在该位置用0代替
 */
var dailyTemperatures = function (temperatures) {
   const n = temperatures.length;
   const res = Array(n).fill(n);

   const stack = [];
   stack.push(0);
   for (let i = 1; i < n; i ++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const top = stack.pop();
      res[top] = i - top;
    }
    stack.push(i)
   }
   return res;
}