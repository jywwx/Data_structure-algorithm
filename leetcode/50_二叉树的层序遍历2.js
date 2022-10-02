/**
 * 给你二叉树的根节点root，返回其节点 自底向上的层序遍历。(即按从叶子节点所在层到根节点的所在层，逐层从左向右遍历)
 * 
 */
var levelOrder = function (root) {
    const ret = [];
    const queue = [];

    if (!root) {
       return ret;
    }
    while (queue.length) {
       const curLevel = [];
       const len = queue.length;
       while (len > 0) {
          const node = queue.unshift();
          curLevel.push(node.val);
          node.left && curLevel.push(node.left);
          node.right && curLevel.push(node.right);
       }
       ret.unshift(curLevel);
    }
    return ret;
}