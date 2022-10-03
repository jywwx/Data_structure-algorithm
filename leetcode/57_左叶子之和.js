/**
 * 给定二叉树的根节点root，返回所有左叶子之和。
 */
/**
 * 
 * @param {*} root 
 * @returns 
 */
// 解题思路 层序遍历 找每一层最左边的节点
var sumOfLeftLeaves = function (root) {
    let sum = 0;
    if (!root) {
      return sum;
    }
    const queue = [root];
    while (queue.length) {
       const len = queue.length;
       sum += queue[0].val;
       while (len--){
         const node = queue.shift();
         node.left && queue.push(node.left);
         node.right && queue.push(node.right);
       }
    }
    return sum;
}

var sumOfLeftLeaves = function (root) {
    let sumLeftVal = 0;
    function travese(node) {
       if (!node) {
          return null;
       }
       const left = node.left;
       if (left && !left.left && !left.right) {
        sumLeftVal += node.left.val;
       }
       travese(node.left);
       travese(node.right);
    }
    travese(root);
    return sumLeftVal;
}