/**
 * 写一个RecentCounter 类来计算特定时间范围内最近的请求。
 *
 * 请你实现RencentCounter() 初始化计数器，请求数为0。
 * int ping(int t) 在时间t 添加一个新请求， 其中t标识以毫秒为单位的某个时间，并返回3000毫秒内发生
 * 的所有请求数(包括新请求)。 确切地说，返回在[t-3000,t]内发生的请求数。
 *
 * 保证每次对ping 的调用斗使用比之前更大的t值。
 */
var RencentCounter = function () {
  this.arr = [];
};

RencentCounter.prototype.ping = function (t) {
  this.arr.push(t);

  while (t - this.arr[0] > 3000) {
    this.arr.shift();
  }
  return this.arr.length;
};
