/**
 * 设计链表的实现。 您可以选择使用单链表 或双链表。 单链表中的节点应该是具有两个属性：val 和 next。
 * val 是当前节点的值，next 是指向下一个节点的指针引用。 如果要使用双向链表，则还需要一个属性prev以
 * 指示链表中的上一个节点，假设链表中的所有节点都是0 -- index。
 *
 * 在链表类中实现这些功能：
 *   get(index): 获取链表中第 index 个节点的值。 入伏哦索引无效， 则返回-1；
 *   addAtHead(val): 在链表的第一个元素之前添加一个值为val 的节点。插入后，新季诶单将成为链表的第一个节点。
 *   addAtTail(val)：将值为val的节点追加到链表的最后一个元素。
 *   addAtIndex(index,val): 在链表中的第Index 个节点之前添加值为val 的节点。如果index 等于链表的长度，
 *   则该节点将附加到链表的末尾。如果index 大于链表的长度，则不会插入节点。 入伏哦index 小于0，则在头部插入节点。
 *   deleteAtIndex(index): 如果索引index 有效，则删除链表中的第index 个节点。
 */

var LinkNode = function (val, next) {
  this.val = val;
  this.next = next;
};

var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

MyLinkedList.prototype.getNode = function (index) {
  if (index < 0 || index >= size) {
    return -1;
  }
  let cur = new LinkNode(0, this.head);
  while (index-- >= 0) {
    cur = cur.next;
  }
  return cur;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= size) {
    return -1;
  }
  return this.getNode(index).val;
};

MyLinkedList.prototype.addAtHead = function (val) {
  const node = new LinkNode(val, this.head);
  this.head = node;
  this.size++;
  if (!this.tail) {
    this.tail = node;
  }
};

MyLinkedList.prototype.addAtTail = function (val) {
  const node = new LinkNode(val, null);
  this.size++;
  if (this.tail) {
    this.tail.next = node;
    this.tail = node;
    return;
  }
  this.tail = node;
  this.head = node;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index > this.size) {
    return;
  }

  if (this.size === index) {
    this.addAtTail(val);
    return;
  }
  if (index <= 0) {
    this.addAtHead(val);
    return;
  }

  const node = this.getNode(index - 1);
  node.next = new LinkNode(val, node.next);
  this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }

  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  let node = this.getNode(index - 1);
  node.next = node.next.next;

  if (index === this.size - 1) {
    this.tail = node;
  }
  this.size--;
};
