/**
 * 请你竟用连个鬼队列实现一个后入先手出的（LIFO）的栈，并支持普通栈的全部四种操作 push top pop empty
 * 
 * 实现MyStack 类：
 *  void push(int x) 将元素x 压入 栈顶
 *  int pop() 移除并返回栈顶元素
 *  int top() 返回栈顶元素
 *  boolean empty() 如果栈是空的 返回true； 否则返回false
 *  
 * 注意：
 *   你只能使用队列的基本操作 -- 也就是 push to bac ， peek/pop form font,size 和isempty 这些操作
 *   你所使用的语言也许不 支持队列 你可以使用list 列表 或者 deque (双端队列)来模拟一个队列，只要是辨准
 *   的队列操作即可
 */

var MyStack = function () {
   this.queue1 = [];
   this.queue2 = [];
}

MyStack.prototype.push = function (x) {
   this.queue1.push(x);
}

MyStack.prototype.pop = function () {
  if (!this.queuq.length) {
    [this.queue1,this.queue2] = [this.queue2,this.queue1];
  }
  while (this.queue1.length > 1) {
    this.queue2.push(this.queue1.shift());
  }
  return this.queue1.shift();
}
MyStack.prototype.top = function () {
    const x = this.pop();
    this.queue1.push(x);
    return x;
}

MyStack.prototype.empty = function () {
   return !this.queue1.length && !this.queue2.length
}
