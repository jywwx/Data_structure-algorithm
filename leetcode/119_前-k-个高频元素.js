/**
 * 给你一个整数数组 和一个整数k，请你返回其中出现频率前k高的元素。你可以按任意顺序返回答案。
 */
// 二叉堆的类
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
}

var topKFrequent = function (nums, k) {
  const hashObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashObj) {
      hashObj[nums[i]] += 1;
    } else {
      hashObj[nums[i]] = 1;
    }
  }
  // 小顶堆
  const heap = new Heap((a, b) => hashObj[a] < hashObj[b]);

  Object.keys(hashObj).forEach((item, ind) => {
    if (ind < k) {
      heap.push(item);
    } else if (hashObj[item] > heap.peek()) {
      heap.push(item);
      heap.pop();

      //   heap.arr[1] = item;
      //   heap.sinkDown(1);
    }
  });
};

var topKFrequent2 = function (nums, k) {
  // 暴力破解法
  const hashObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hashObj) {
      hashObj[nums[i]] += 1;
    } else {
      hashObj[nums[i]] = 1;
    }
  }
  const assembler = Object.entries(([item, value]) => ({
    value: value,
    key: item,
  }));
  assembler.sort((a, b) => b.value - a.value);

  return assembler.filter((item, ind) => ind <= k).map((item) => item.key);
};
