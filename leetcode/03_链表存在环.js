//题目要求 每个链表节点的值 是值类型 切不重复
/**
 *
 * @param {*} head
 *解法: 遍历链表 判断每个元素是否出现过
 *
 */
const hasCyle = (head) => {
  const cache = new Set();
  while (head) {
    if (cache.has(head.val)) {
      return true;
    } else {
      cache.add(head.val);
    }
    head = head.next;
  }
  return false;
};

/**
 *
 * @param {*} head
 * 线性表(链表或者数组)  双指针解法
 */
const hasCyle2 = (head) => {
  let slow,
    fast = head;

  while (slow && fast) {
    slow = head.next;
    fast = head.next.next;

    if (slow.val === fast.val) {
      return true;
    }
  }
  return false;
};
