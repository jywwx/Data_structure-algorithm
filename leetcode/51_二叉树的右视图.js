/**
 * 给定一个二叉树的根节点 root, 想象自己站在它的右边，按从顶部到底部的顺序，返回从右侧所能看到的节点值
 */
var rightSideView = function (root) {
    // 按照层序遍历 获取最右边的值
   if (!root) {
      return [];
   }

   const ret = [];
   const queue = [root];
   while (queue.length) {
      const len = queue.length;
      while (len--) {
        const node = queue.shift();
        len === 0 && curLevel.push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
      ret.push(curLevel[curLevel.length -1])
   }
   return ret;
}