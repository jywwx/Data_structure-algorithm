/**
 * 给你一个嵌套的整数列表 nestedList。 每个元素要么是一个整数，要么是一个列表；该列表元素也可能是整数或者是其他列表。请你实现
 * 一个迭代器将其扁平化， 使之能够遍历这个列表的所有整数
 *
 * 实现扁平迭代器类 NestedIterator:
 *    nestedIterator(List<NestedIterator> nestedList) 用嵌套列表nestList 初始化迭代器。
 *
 *    int next() 返回嵌套列表的下一个整数。
 *
 *    boolean hasNext() 如果仍然存在戴迭代的整数，返回true；否则返回false。
 */

function NestedIterator(list) {
  this.list = this.flatArray(list);
}

NestedIterator.prototype.next = function () {
  return this.list.shift();
};

NestedIterator.prototype.hasNext = function () {
  return this.list.length;
};

NestedIterator.prototype.flatArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].isInteger()) {
      this.list.push(arr[i].getInteger());
    } else {
      this.flatArray(arr[i].getList());
    }
  }
};

// 扁平化数组; 比较简单 也可以用迭代
function flatArray(arr) {
  const stack = [...arr];
  const ret = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      ret.push(next);
    }
  }
  return ret;
}
