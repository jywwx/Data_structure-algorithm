/**
 * 给你两棵二叉树 root1 和 root2。
 * 
 * 想象一下， 当你将其中一颗覆盖到另一颗棵之上时，两棵树上的一些节点将会重叠(而另一些不会)。
 * 你需要将这两棵树合并成一颗新二叉树。合并的规则是：如果两个节点重叠，那么将这个两个节点
 * 的值相加作为合并后节点的新值；否则，不为null的节点将直接作为新二叉树的节点。
 * 
 * 返回合并后的二叉树。
 * 注意：合并过程必须从两个树的根节点开始。
 */

var mergeTrees = function (root1,root2) {
  function dfs (root1,root2) {
    if (!root1) {
      return root2;
    }
    if (!root2) {
      return root1;
    }

    root1.val += root2.val;
    dfs(root1.left,root2.left);
    dfs(root1.right,root2.right);
    return root1;
  }
  return dfs(root1,root2)
}