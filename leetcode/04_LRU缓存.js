//LRU 缓存 算法  容器的size   新增元素之后数量超过size 之后 删除 最长时间没有使用的元素
//策略 跟新的元素 放置到线性表的头部  更新元素 放置头部并删除已经存在的元素
// keep-alive 的原理
/**
 *
 * @param {*} capacity
 */
function LURcache(capacity) {
  this.cache = new Map();
  this.size = capacity;
}
LURcache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const tem = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, tem);
    return tem;
  }
  return -1;
};
LURcache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  } else if (this.size === this.cache.size) {
    this.cache.delete(this.cache.keys().next.value);
  }
  this.cache.set(key, value);
};
