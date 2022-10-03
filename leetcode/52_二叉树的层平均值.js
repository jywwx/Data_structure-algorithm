/**
 * 给定一个非空二叉树的根节点root，以数组的形式返回每一层节点树的平局值，
 * 与实际答案想叉 10 ^ -5 以内的答案可以被接受
 */

var averageOfLevels = function (root) {
    const ret = [];
    const queue = [root];
    if (!root) {
      return [];
    }
    while (queue.length) {
      let originLen = len =  queue.length
      let sum = 0;
      while (len --) {
        const node = quenue.shift();
        sum += node.val;
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      };
      ret.push(sum / originLen);
    }
    return ret;
}