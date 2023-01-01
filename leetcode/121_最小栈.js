/**
 * 设计一个支持push pop top操作,并能在常数时间内检索到最小元素的栈。
 *
 * 实现MinStack类：
 *    MinStack() 初始化堆栈对象。
 *    void push(int val) 将元素val 推入堆栈
 *    void pop() 删除堆栈顶部的元素
 *    int top 获取堆栈顶部的元素
 *    int getMin() h获取堆栈中的最小元素。
 */

var MinStack = function () {
  this.stack = [];
  this.mins = [Infinity];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
  this.mins.push(Math.min(val, this.mins[this.mins.length - 1]));
};

MinStack.prototype.pop = function () {
  this.stack.pop();
  this.mins.pop();
};

MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};
