/**
 * 给定一个链表的头节点head 返回链表开始入环的第一个节点,如果链表无环，则返回null。
 * 
 * 如果链表中有某个节点，可以通过连续跟中next指针再次到达 则链表中存在环。为了便是给定链表
 * 中的环，评测系统内部使用整数pos 来表示链表尾链接到链表中的位置（索引从0开始）。如果是pos-1，
 * 则在该链表表中没有环。注意：pos 不作为参数进行传递，仅仅是为了表示链表的实际情况。
 * 不允许修改链表。
 */

var detectCycle = function (head) {
   // 解题思：
    //             b
    //     a      ---*--
    // ----------|      |
    //            ------
    //               c

    //  2 * (a + b) = a + b + 圈 * n
    // fast 走过的路： a + b + n(b + c)
    // slow 走过的路： 2 * ( a + b)
    // 2 * ( a + b) = a + b + n(b + c)
    //a + b = n(b + c)
    // 想要找到a
    // a  = n(b + c) - b
    // a = (n - 1) * (b + c) + c

    // 上面是公式，翻译为 fast 与 slow 碰撞之后 
    // 从头 开始 ++ 从碰撞点 fast++ 或者 slow ++ 再次碰撞 跟第一次碰撞点不同性质不一样 同步移动
    // 再次 碰撞点就是入环的点
    

    if (!head) {
      return null;
    }

    let fast = head, slow = head;
    while (fast) {
       slow = slow.next;

       if (fast.next) {
          fast = fast.next.next;
       } else {
          return null
       }

       if (fast == slow) {
          let cur = head;
          while (cur !== slow) {
             cur = cur.next;
             slow = slow.next;
          }
          return cur
       }
    }
    return null;
}