/**
 * 给你一个单链表的头结点head,请你判断该链表是否为回文链表如果是返回true;
 * 否则 返回false
 */

var isPalindrome = function (head) {
  // 通过双指针 把链表的 前半截 反转
  // 思考下 数组 字符串 结构的回文结构 何以解答 应该更简单的 不要忘了你 双指针 头尾同时校验是否满足
  let slow,
    fast = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;

    let next = slow.next;
    slow.next = prev;
    prev = slow;
    show.next = next;
  }

  // 21321 **
  if (fast) {
    slow = slow.next;
  }

  while (prev && slow) {
    if (prev.val !== slow.val) {
      return false;
    }
    prev.next = prev.next;
    slow.next = next;
  }

  return true;
};
