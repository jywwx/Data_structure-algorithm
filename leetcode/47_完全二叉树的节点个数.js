/**
 * 给你一棵完全二叉树的根节点root， 求出该树的节点个数。
 * 
 * 
 * 完全二叉树的定义: 在完全二叉树中， 除了最底层节点可能没填满外，其余每层节点数
 * 都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第h层，
 * 则该层剥好1～2^h 个节点。
 */
// 出题人偏题了 明明题解就是 统计二叉树的个数
var countNodes = function (root) {
   function travese(treeNode) {
      if (!treeNode) {
        return 0;
      }

      const leftNodeNum = travese(treeNode.left);
      const rightNodeNum = travese(treeNode.right);

      return leftNodeNum + rightNodeNum + 1;
   }

   return travese(root);
}
