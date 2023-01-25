/**
 * 你有一个只支持单个标签页的浏览器，最开始你浏览的网页时homepage, 你可以访问其他网站的url，也可以在浏览历史中后退steps步
 * 或前进steps步。
 *
 * 请你实现BrowserHistory类：
 *   BrowserHistory(string homepage),
 *   用homepage初始化浏览器类。
 *
 *   void visit(string url) 从当前页跳转访问url 对应的页面。 执行此操作回会把浏览器历史前进记录全部删除
 *
 *   string back(int steos) 在浏览器历史中厚度steps步。 如果你只能在浏览器历史中后退至多x步且steps > x,
 *   那么你只后腿x步。 清返回后腿至多steps步以后的url。
 *
 *    string forward(int steps) 在浏览历史中前进steps步。如果你只能在浏览历史中前进之多x步。请返回前进至
 *    多steps步以后的url
 */
var BrowserHistory = function (homepage) {
  this.stack = [homepage];
  this.current = 0;
};

BrowserHistory.prototype.visit = function (url) {
  this.stack.length = this.current;
  this.stack.push(url);
  this.current++;
};

BrowserHistory.prototype.back = function (steps) {
  this.current = Math.max(0, this.current - steps);
  return this.stack[this.current];
};

BrowserHistory.prototype.forward = function (steps) {
  this.current = Math.min(this.stack.length - 1, this.current + steps);
  return this.stack[this.current];
};
