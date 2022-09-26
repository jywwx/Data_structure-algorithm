/**
 * 给一个二叉树 根节点判断 该二叉树是否为 对称 二叉树
 */
/**
 * 
 * @param {*} root 
 */
// 解题思路 判断连个 子树 是否是相同的树
// 复用了两个二叉树 是否相同的算法
var isSymmetric = function (root) {

    const travase = (rootL,rootR) => {
      if (rootL === null && rootR === null) {
        return true;
      }
      if (rootL === null || rootR === null ) {
        return false;
      }
      if (rootL.val === rootR.val) {
        return travase(rootL.left,rootR.right) && travase(rootL.right,rootR.right);
      } 
      return false;
    }

    return travase(root.left,root.right);
}