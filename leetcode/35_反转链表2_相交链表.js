/**
 * 给你单链表的头指针head 和两个整数 left 和 right, 其中left <= right。请你反转从位置left 到位置right
 * 的链表节点，返回反转后的链表
 */

const linkNode = { val:1,next:{ val:2, next:{val:3, next:{val:4 ,next:{val:5,next: null}}} }}



var reverseBetween = function (head,left,right) {
   let dummy = {
     next:head
   }

   let temp = dummy;

   for (let i = 0; i < left - 1; i ++) {
      temp = temp.next;
   }

   let prev = temp.next; cur = prev.next;

   for (let j = 0; j < right -left; j ++) {
      const next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
   }
   temp.next.next = cur;
   temp.next = prev;
}

reverseBetween(linkNode,2,4)
// console.log(reverseBetween(linkNode,2,4))