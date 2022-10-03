/**
 * 题目要求
 * 
 * 给你两个单链表的头节点,headA 和 headB， 请你找出并返回两个链表相交的起始节点。如果两个链表不存在相交节点，返回null。
 * 
 * 
 * 题目数据保证 整个链式结构中不存在环。
 * 注意，函数返回结果后，链表必须保证其原始结构 亦可即不能改变链
 */

var getIntersectionNode = function (headA,headB) {
   // A 链表 遍历完之后 尾节点 与 B 的头节点 链接在一起 转变思路 变成 全寻找环形链表 入环节点 题目

   let curA = headA, curB = headB;

   while (curA !== curB) {
      curA = curA === null ? headB: curA.next;
      curB = curB === null ? headA: curB.next;
   }
   return curA;
}