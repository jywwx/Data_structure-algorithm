/**
 * 给你二叉树的根节点root, 返回其节点值的 层序遍历
 * (即逐层地, 从做到右访问所有节点)。
 */

var levelOrder = function (root) {
    const result = [];
    const quene = [root];

    if (!root) {
       return [];
    }
    while (quene.length) {
      const len = quene.length;
      const cur = [];

      for (let i = 0; i < len; i ++) {
         const node = quene.shift();
         cur.push(node.val);
         node.left && quene.push(node.left);
         node.right && quene.push(node.right);
      }
      result.push(cur);
    }
    return result;
}

var levelOrder2 = function (root) {
    const queue = [root];
    const ret = [];
   if (!root) {
     return ret;
   } 
   while (queue.length) {
    const curLevel = [];
    let len = queue.length;
    while (len > 0) {
      const node = queue.shift();
      curLevel.push(val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      len --;
    }
    ret.push(curLevel);
   }
}