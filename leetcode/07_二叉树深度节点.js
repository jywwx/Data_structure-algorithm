// 题目要求 找出 树结构最深的节点层数
// 时间复杂度为O(n)
// 构造二叉树 数据
function TreeNode(val, left, right) {
  this.val = val ? val : 0;
  this.left = left ? left : null;
  this.right = right ? right : null;
}
const left1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const right2l = new TreeNode(5, new TreeNode(6), new TreeNode(7));
const right1 = new TreeNode(4, right2l, new TreeNode(8));
const root = new TreeNode(0, left1, right1);

const getMaxtreeNum = (tree) => {
  if (!root) {
    return 0;
  }
  return Math.max(getMaxTreeNum(root.left), getMaxtreeNum(root.right)) + 1;
};
console.log(getMaxtTreeNum(root), "getMaxtTreeNum(root)");
