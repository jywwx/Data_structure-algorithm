/**
 * 构造二叉树
 * @param {*} val
 * @param {*} left
 * @param {*} right
 */
function TreeNode(val, left, right) {
  this.val = val ? val : 0;
  this.left = left ? left : null;
  this.right = right ? right : null;
}
const left1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const right2l = new TreeNode(5, new TreeNode(6), new TreeNode(7));
const right1 = new TreeNode(4, right2l, new TreeNode(8));
const root = new TreeNode(0, left1, right1);

/**
 * 给定一个二叉树的根节点root，返回它的 前序遍历
 */
var inorderTraversal = function (tree) {
  const ret = [];
  function dfs(node) {
    if (!node) {
      return;
    }
    ret.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(tree);
  return ret;
};

var inorderTraversal2 = function (tree) {
  const ret = [];
  if (!tree) {
    return ret;
  }
  const stack = [];
  while (stack.length) {
    const node = stack.pop();
    ret.push(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return ret;
};
console.log(inorderTraversal(root));
