/**
 *给定一个整数数组temperatures,便是每天的温度,返回一个数组answer，其中answer[i]是指
 在第i天之后，才会有更高的温度。 如果气温在这之后都不会升高，请在该位置用0代替
 */
var dailyTemperatures = function (temperatures) {
  // 也是精髓操作 操了个B了个B的
  const n = temperatures.length;
  const res = Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const topInd = stack.pop();
      res[topInd] = i - topInd;
    }
    stack.push(i);
  }
  return res;
};

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));
