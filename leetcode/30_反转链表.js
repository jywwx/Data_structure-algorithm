/**
 * 给你单链表的头节点head 请你反转链表 并返回反转后的链表
 */
// 1 => 2 => 3 => 4
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let prev = null,
    cur = head;
  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return head;
};
