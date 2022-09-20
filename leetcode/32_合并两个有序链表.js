/**
 * 将两个升序链表合并为一个新的升序链表并返回。
 * 新链表是通过拼接给定的两个链表的所有节点组成的
 * 
 */

var mergeTwoLists = function (list1,list2) {

    // 遍历两个链表,每次判断节点头部的大小 
    // 优先把小的追加的新的链表上

    let dummy = {
        next:null
    }
    
    let tem = dummy;
    while (list1!== null && list2 != null) {
       if (list1.val <= list2.val) {
        tem.next = list1;
        list1 = list1.next;  
       } else {
        tem.next = list2.next;
       }
       tem = tem.next;
    }

    tem.next = list1 === null ? list1 : list2;

    return dummy.next;
}