/**
 * 给定一个二叉树,找到该树中两个置顶节点的最近公共祖先。
 */

var lowestCommonAncestor = function (root,p,q) {
    if (!root) {
       return null;
    }

    if (p === root || q === root) {
      return root;
    }
    const left = lowestCommonAncestor(root.left,p,q);
    const right = lowestCommonAncestor(root.right,p,q);

    if (left && right) {
      return root;
    }
    return left ? left : right;
}