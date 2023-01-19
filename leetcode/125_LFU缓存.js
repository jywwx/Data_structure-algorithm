/**
 *请你为最不经常使用（LFU）缓存算法设计并实现数据结构。

 实现LFUcache类：
     LFUCache (in capacity) -用数据结构的容量capacity初始化对象
     in get(int key) -如果键key 存在缓存中，则获取键的值，否则返回-1.
     void put(int key, int value)-如果键key 已经存在，则变更其值；如果键不存在，则请插入键值对。当缓存达到其
     容量capacity时，则应该插入新项之前，移除最不经常使用的项目。在此问题中，当存在平局（即两个或更多个建具有相同使用频率）
     时，应该去除最近最久未使用的键。

     为了确定最不常使用的键，可以为缓存中的每个键维护一个使用计数器。使用计数最小的键是最久未使用的键。
     当一个键首次插入到缓存中时，它的使用计数器被设置为1 (由于put操作)。对缓存中的键执行get 或put 操作，使用计数器的值将会递增。

     函数gei 和put 必须以0（1）的时间复杂度运行。
 */

var LFUCache = function (capacity) {
  this.size = capacity;
  this.values = new Map();
  this.useMap = new Map();
  this.times = new Map();
  this.min = 0;
};

LFUCache.prototype.get = function (key) {
  if (this.values.has(key)) {
    this.updateCount(key);
    return this.values.get(key);
  }
  return -1;
};

LFUCache.prototype.put = function (key, value) {
  if (!this.size) {
    return;
  }

  if (this.values.has(key)) {
    this.values.set(key, value);
    this.updateCount(key);
  } else {
    if (this.size === this.values.size) {
      const minSet = this.useMap.get(this.min);
      const minKey = minSet.keys().next.value;
      minSet.delete(minKey);
      this.values.delete(minKey);
      this.times.delete(minKey);
    }
    this.values.set(key, value);
    const useSet = this.useMap.get(1) || new Set();
    useSet.add(key);
    this.times.set(key, 1);
    this.useMap.set(1, useSet);
    this.min = 1;
  }
};

LFUCache.prototype.updateCount = function (key) {
  let time = this.times.get(key);
  let useSet = this.useMap.get(time);
  if (this.min === time && useSet.size === 1) {
    this.min++;
  }
  time++;
  useSet.delete(key);
  useSet = this.useMap.get(time) || new Set();
  useSet.add(key);
  this.useMap.set(time, useSet);
  this.times.set(key, time);
};
