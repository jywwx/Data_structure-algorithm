/**
 * 找到链表的中间节点
 */

// 1 => 2 => 3 => 4 => 5 => 6 => 7 => 8 => 9 => 10
// 1 2
// 2 4
// 3 6
// 4 8
// 5 10
// 6 null 假设 11 6 还是中间节点
/**
 *
 * @param {*} head
 */
var middleNode = function (head) {
  let slow,
    fast = head;
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
