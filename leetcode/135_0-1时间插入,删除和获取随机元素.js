/**
 * 实现设计RandomSet 类：
 *   bool insert(int val) 当元素val 不存在时, 向集合中插入该项，并返回true； 否则返回false。
 *
 *   bool remove(int val) 当元素va 存在时， 从集合中移除该项，并返回true； 否则返回false。
 *
 *   int getRandom() 随机返回现有集合中的一项（测试用例保证调用此方法时集合中至少存在一个元素）。
 *   每个元素应该有相同的概率被返回。
 *
 *   你必须实现类的所有函数， 并满足每个函数的平均时间复杂度为O(1)
 *
 *
 */
var RandomSet = function () {
  this.list = [];
  this.map = {};
};

RandomSet.prototype.insert = function (val) {
  if (val in this.map) {
    return false;
  } else {
    this.list.push(val);
    this.map[val] = this.list.length - 1;
    return true;
  }
};

RandomSet.prototype.remove = function (val) {
  if (val in this.map) {
    const ind = this.map[val];
    const lastVal = this.list[this.list.length - 1];
    this.list.pop();
    delete this.map.val;
    this.map[lastVal] = ind;
    return true;
  } else {
    return false;
  }
};

RandomSet.prototype.getRandom = function () {
  const ind = Math.floor(Math.random() * this.list.length);
  return this.list[ind];
};
