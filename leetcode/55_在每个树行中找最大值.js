/**
 * 给定一棵二叉树的根节点root，请找出该二叉树中每一层的最大值
 */
/**
 * 
 * @param {*} root 
 * @returns 
 */
var largestValues = function (root) {
    const ret = [];
    const queue = [root];
   if (!root) {
      return ret;
   }

   while (queue.length) {
      const len = queue.length;
      let maxVal = queue[0].val;
      while (len --) {
        const node = queue.shift();
        maxVal = Math.max(node.val,maxVal);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
      ret.push(maxVal);
   }
   return ret;
}