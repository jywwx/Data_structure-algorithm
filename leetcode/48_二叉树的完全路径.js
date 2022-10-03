/**
 * 给你一个二叉树的根节点root, 按任意顺序。 返回所有从根节点到叶子节点的路径
 */
// perfect;
var binaryTreeDepths = function (root) {
    const reult = [];

    function travese(node,path) {
      if (!node) {
        return null;
      }
      if (!node.left && !node.right) {
        reult.push(path + node.val + '->')
      }
      path += node.val+ '->';
      travese(node.left,path);
      travese(node.right,path);
    } 
    travese(root,'');
    return reult;
}