/**
 * N 叉树的层序遍历
 */

/**
 *  function Node (val,children) {
 *    this.val = val;
 *    this.children = children;
 *  }
 */

/**
 * 
 * @param {*} root 
 */
var levelOrder = function (root) {
    const ret = []
    if (!root) {
      return ret;
    }
    const queue = [root];
    while (queue.length) {
      const len = queue.length;
      const curLevel = [];
      while (len --) {
        const node = queue.shift();
        curLevel.push(node.val);
        // (node.children?? []).forEach((child) => queue.push(child))
        // 或者
        // queue.contact(node.children?? [])
      } 
      ret.push(curLevel);
    }
    return ret;
}