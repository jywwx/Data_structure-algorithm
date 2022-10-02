/**
 * 给定一个完美二叉树, 其所有叶子节点都在同一层，每个父节点都有两个字节点
 * 
 * struct Node {
 *   int val;
 *   Node *left;
 *   Node *right;
 *   Node *next;
 * }
 * 
 * 填充它的每个next 指针， 让这个指针指向其下一个右侧节点， 如果找不到下一个右侧节点，则将next 指针设置为null
 */

var connect = function (root) {
   if (!root) {
     return root;
   }

   const queue = [root];
   while (queue.length) {
      const len = queue.length;
      while (len --) {
        const node = queue.shift();
        // if (!len) {
        //     node.next = null;
        // } else {
        //     node.next = queue[0];
        // }
        // 小优化下
        // !len ? ( node.next = null) : (node.next = queue[0]);
        if (len < 1) {
          node.next = null;
        }
        node.next = queue[0];
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
   }
   return root;
}