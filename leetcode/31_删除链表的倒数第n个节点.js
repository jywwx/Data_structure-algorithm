/**
 * 题目要求
 * 给你一个链表,删除链表的倒数第n个节点,并且返回链表的头节点
 */

var removeNthFromEnd = function (head,n) {
  // 两次遍历 100 10
  // 先遍历一次 获取链表的总长度 第二次遍历 找到倒数第N个节点删除

  // 双指针 遍历 fast slow  让fast 先走 n 个节点 然后 fast slow 一起走 fast 走完的
  // 时候 slow 刚好就是倒数第n 个节点
  
  const dummy = {
    next:head
  }
  let slow = fast = dummy;
  while (--n) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;   
  }
  slow.next = slow.next.next;
  
  return dummy.next;
}