/**
 * 给你链表的头节点head， 清将其按升序排列并返回排序后的链表。
 */
var sortList = function (head) {
  if (!head) {
    return null;
  }
  const arr = [];
  while (head) {
    const temp = head.next;
    head.next = null;
    arr.push(head);
    head = temp;
  }

  arr.sort((a, b) => a.val - b.val);
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1];
  }
  return arr[i];
};
