/**
 * 给定一个二叉树，判断他是否是高度平衡的二叉树
 * 
 * 本题中，一棵高度平衡二叉树定义为：
 * 
 * 一个二叉树每个节点的左右两个子树的高度差的绝对值不超过1.
 */

var isBalanced = function (root) {
    function travese(treeNode) {
      if (!treeNode) {
         return 0;
      }

      const leftDepth = travese(treeNode.left);
      if (leftDepth ===  -1) {
         return -1;
      }
      const rightDepth = travese(treeNode.right);

      if (rightDepth === -1) {
         return -1;
      }

      if (Math.abs(leftDepth - rightDepth) > 1) {
         return -1;
      } else {
         return Math.max(leftDepth,rightDepth) + 1;
      }
    }

    return travese(root) !== -1;
}