/**
 * 给定整数数组nums 和 整数k，请返回数组中第k个最大的元素。
 *
 *请注意，你需要招的是数组排序后的第k 个最大的元素，而不是第k 个不同的元素
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

var findKthLargest = function (nums, k) {
  // 维护一个大小是k的小顶堆

  const minHeap = new Heap((a, b) => a < b);

  for (let num of nums) {
    minHeap.push(num);
    if (minHeap.size > k) {
      minHeap.pop();
    }
  }
  return minHeap.peek();
  // 时间复杂度是 n * logK 这是次要的一点
  // 其次最重要的是 nums 可以是流动的 动态的数据
};

var findKthLargest2 = function (nums, k) {
  // 时间复杂度是n * Log(n)
  return nums.sort((a, b) => b - a)[k];
};
