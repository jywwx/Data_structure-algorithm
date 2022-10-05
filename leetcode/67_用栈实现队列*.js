/**
 * 请你使用两个栈实现先入先出队列。 队列应当支持一半队列支持的所有操作(push,pop,peek,empty);
 * 
 * 实现Myqueue类：
 * void push(inx x) 将元素x 推到队列的末尾
 * int pop() 从队列的开头移除并返回元素
 * int peek() 返回队列开头的元素
 * boolean empty() 如果队列为空，返回true； 否则返回false
 * 
 * 说明：
 *    你只能使用标准的栈操作 --- 也就是只有 push to top, peek/pop from top，size 和isempty操作是合法的。
 *     
 *    你所使用的语言也许不支持栈。你可以使用list 或者deque（双端队列） 来模拟一个栈，只要是标准的栈操作即可。
 */

var MyQueue = function () {
   this.stack1 = [];
   this.stack2 = [];
}

MyQueue.prototype.push = function (x) {
   this.stack1.push(x);
}

MyQueue.prototype.pop = function () {
   if (this.stack2.length) {
     return this.stack2.poop();
   }
   while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
   }
   return this.stack2.pop();
}

MyQueue.prototype.peek = function () {
  const x = this.pop();
  this.stack1.push(x);
  return x;
}

MyQueue.prototype.empty = function () {
  return !this.stack1.length && !this.stack2.length;
}