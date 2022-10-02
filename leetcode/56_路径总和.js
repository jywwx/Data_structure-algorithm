/**
 * 给你二叉树的根节点root 和一个表示目标和的整数targetSum。判断该树中是否存在根节点到叶子节点的路径，
 * 这条路径上所有节点值相加等于目标和taegetSum。
 * 如果存在返回true；否则返回false
 *  
 * 
 * 叶子节点是没有子节点的节点
 */
// 自己想的解法 思想是正确的 但是不是最优雅的解法
/**
 * 
 * @param {*} root 
 * @param {*} targetSum 
 * @returns 
 */
var hasPathSum = function (root,targetSum) {
    const allPathVal = new Set();
    function travese (root,sumVal) {
      if (!root) {
        return 0;
      }
      if (!root.left && !root.right) {
        allPathVal.add(sumVal);
      }
      sumVal += root.val;
      travese(root.left,sumVal);
      travese(root.right,sumVal);
    }
    travese(root,0);
    return allPathVal.has(targetSum);
}

/**
 * 
 * @param {*} root 
 * @param {*} targetSum 
 */
var hasPathSum2 = function (root,targetSum) {
    if (!root) {
       return false;
    }
    if (!root.left && !root.right) {
       return root.val === targetSum;
    }
    const offset = targetSum - root.val;
    return hasPathSum2(root.left,offset) || hasPathSum2(root.right,offset);
}