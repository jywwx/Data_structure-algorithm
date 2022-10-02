/**
 * 给定一棵二叉树。 一棵二叉树的直径长度是任意两个节点路径长度中的最大值。这条路径可能穿过也可能不穿过根节点。
 */

var diameterOfBinaryTree = function (root) {
    let len = 0;
    function dfs (root) {
       if (!root) {
          return null;
       }
       const left = dfs(root.left);
       const right = dfs(root.right);
       len = Math.max(left,right) + 1;
    }
    dfs(root);
    return len;
}