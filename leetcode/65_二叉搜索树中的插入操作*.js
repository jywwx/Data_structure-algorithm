/**
 * 给定二叉搜索树（BST）的根节点root和要插入树中的值value,将值插入二叉搜索树。返
 * 回插入后二叉搜索树的根节点。输入数据保证，新值和原始二叉搜索树中的任意节点值都不同。
 * 
 * 
 * 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。你可以返回任意
 * 有效的结果
 */


 function TreeNode (val,left,right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}


// 所有的值是独一无二
var insertIntToBST = function (root,val) {

    if (!root) {
       return new TreeNode(val);
    }

    if (root.val > val) {
      root.left = insertIntToBST(root.left,val);
    }
    root.right = insertIntToBST(root.right,val);
    return root;
}
// 暴力破解办法
// 先将二叉搜索树 转换成 升序数组 再插入值
// 再将升序数组 转换成 二叉搜索树 笨办法