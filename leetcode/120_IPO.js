/**
 * 假设力扣公司 即将开始IPO。为了以更高的价格将股票卖给风险投资公司，力扣希望在IPO之前开展一些项目
 * 以增加其资本。由于资源有限，它只能在IPO之前完成最多K个不同的项目。帮助力扣 设计完成最多k个不同
 * 项目后得到最大总资本的方式。
 *
 * 给你n个项目。对于每个项目i，它都有一个纯利润profits[i],和启动该项目需要的最小资本capital[i]。
 *
 * 最初，你的资本为w。当你完成一个项目时，你将获得纯利润，且利润将被添加到你的总资本中。
 *
 * 总而言之，从给你项目中选择最多k 个不同项目的列表，以最大化最终资本并输出最终可获得的最多资本。
 *
 * 答案保证在32位有符号整数范围内。
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

var findMaximizedCapital = function (k, w, profits, capital) {
  // 堪称精髓写法啊 我操了个b
  const arr = capital.map((item, ind) => [item, profits[ind]]);
  arr.sort((a, b) => a[0] - b[0]);
  const heap = new Heap((a, b) => a > b);
  let cur = 0;

  while (k > 0) {
    while (cur < arr.length && arr[cur][0] <= w) {
      heap.push(arr[cur][1]);
      cur++;
    }

    if (heap.size > 0) {
      w += heap.pop();
    } else {
      break;
    }
    k--;
  }
  return w;
};
