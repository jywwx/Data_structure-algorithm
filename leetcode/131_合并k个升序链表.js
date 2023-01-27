/**
 * 给你一个链表数组，没个链表斗已经按升序排列。
 * 请你讲所有链表合并到一个升序链表中，返回合并后的链表。
 */

var mergeKLists = function (lists) {
  /**
   * 暴力解法 面试得分不高
   */

  const arr = [];
  for (let i = 0; i < lists.length; i++) {
    const node = lists[i];
    while (node) {
      arr.push(node);
      node = node.next;
    }
  }
  arr.sort((a, b) => a.val - b.val);
  let head = arr[0] || null,
    current = arr[0] || null;
  for (let i = 0; i < arr.length; i++) {
    current.next = arr[i];
    current = current.next;
  }
  return head;
};

var mergeKList2 = function (lists) {
  // 两个链表的merge

  const merge = (head1, head2) => {
    const dummy = {
      next: null,
    };
    let temp = dummy;
    while (head1 && head2) {
      if (head1.val <= head2.val) {
        temp.next = head1;
        head1 = head1.next;
      } else {
        temp.next = head2;
        head2 = head2.next;
      }
      temp = temp.next;
    }
    temp.next = head1 ? head1 : head2;
    return dummy.next;
  };

  const mergeList = (nums, start, end) => {
    if (start === end) {
      return nums[start];
    }

    const mid = (start + end) >> 1;
    const leftList = mergeList(nums, start, mid);
    const rightList = mergeList(nums, mid + 1, end);
    return merge(leftList, rightList);
  };
  if (nums.length === 0) {
    return 0;
  }
  mergeList(lists, 0, lists.length - 1);
};
