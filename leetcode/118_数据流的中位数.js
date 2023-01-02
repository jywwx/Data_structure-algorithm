/**
 *  中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。
 *
 *  例如,
 *  [2,3,4] 的中位数是3
 *  [2,3] 的中位数是(2 + 3) / 2 = 2.5
 *
 *  设计一个支持一下两种操作的数据结构:
 *
 *   void addNum(int num) -从数据流中添加一个整数到数据结构中。
 *   double findMedian() -返回目前所有元素的中位数
 */
class Heap {
  constructor(compare) {
    this.arr = [0]; // 忽略0 这个索引
    this.compare = compare ? compare : (a, b) => a > b;
  }
  get size() {
    return this.arr.length - 1;
  }

  push(item) {
    // 新增元素
    this.arr.push(item);
    this.shiftUp(this.arr.length - 1);
  }

  shiftUp(k) {
    const { arr, compare, parent } = this;
    while (k > 1 && compare(arr[k], arr[parent(k)])) {
      this.swap(parent(k), k);
      k = parent(k);
    }
  }

  pop() {
    // 弹出堆顶
    if (this.arr.length === 1) {
      return null;
    }

    this.swap(1, this.arr.length - 1);
    const head = this.arr.pop();
    this.sinkDown(1); // 下沉操作
    return head;
  }

  sinkDown(k) {
    const { arr, compare, left, right, size } = this;

    while (left(k) <= size) {
      let child = left(k);
      if (right(k) <= size && compare(arr[right(k)], arr[child])) {
        child = right(k);
      }

      if (compare(arr[k], arr[child])) {
        return;
      }

      this.swap(k, child);
      k = child; // 继续向下
    }
  }

  peek() {
    // 回去堆顶元素
    return this.arr[1];
  }

  left(k) {
    return k * 2;
  }

  right(k) {
    return k * 2 + 1;
  }

  parent(k) {
    return Math.floor(k / 2);
  }
  swap(i, j) {
    [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
  }
} // 二叉堆 类

// 设计一个思路
// 设计一个大顶堆 放置小的那一半数字
// 设计一个小顶堆 放置大的那一半数字
var MedianFinder = function () {
  this.maxHeap = new Heap((a, b) => a > b);
  this.minHeap = new Heap((a, b) => a < b);
};

MedianFinder.prototype.addNum = function (num) {
  if (!this.maxHeap.size || num < this.maxHeap.peek()) {
    this.maxHeap.push(num);
  } else {
    this.minHeap.push(num);
  }

  // 保持两个二叉堆的平衡
  if (this.maxHeap.size - this.minHeap.size > 1) {
    this.minHeap.push(this.maxHeap.pop());
  }

  if (this.minHeap.size > this.maxHeap.size) {
    this.maxHeap.push(this.minHeap.pop());
  }
};

MedianFinder.prototype.findMedian = function () {
  if ((this.maxHeap.size + this.minHeap.size) & 1) {
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
  }
  return this.maxHeap.peek();
};
