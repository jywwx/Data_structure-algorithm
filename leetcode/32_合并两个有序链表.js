/**
 * 将两个升序链表合并为一个新的升序链表并返回。
 * 新链表是通过拼接给定的两个链表的所有节点组成的
 *
 */

var mergeTwoLists = function (list1, list2) {
  // 遍历两个链表,每次判断节点头部的大小
  // 优先把小的追加的新的链表上
  // 暴力解法遍历两个链表 把val 放在同一个数组中 然后排序再转换成链表
  const dummy = {
    next: null,
  };

  let temp = dummy;

  while (list1 && list2) {
    if (list1 <= list2) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }
  temp.next = list1 ? list1 : list2;

  return dummy.next;
};
