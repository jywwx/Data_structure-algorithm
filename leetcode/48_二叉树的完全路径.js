/**
 * 给你一个二叉树的根节点root, 按任意顺序。 返回所有从根节点到叶子节点的路径
 */
// perfect;
var binaryTreeDepths = function (root) {
    const reult = [];

    function travase (node,path) {
      if (!node) {
        return 
      }

      if (!node.left && !node.right) {
        result.push(path + node.val + '=>')
      }
       path += node.val + '=>';
       travase(node.left,path);
       travase(node.right,path);
    }

    travase(root,'');
    return reult;
}