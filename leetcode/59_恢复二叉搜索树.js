/**
 * 恢复二叉搜索树
 * 
 * 给你二叉搜索树的根节点root, 该树中的恰好两个节点的值被错误的交换。 请在不改变其结构的情况下，恢复这棵二叉搜索树。
 */


/**
 * 
 * @param {*} root 
 */
var recoverTree = function (root) {
   const arr = [];
   let first,second;
   const travese = (node) => {
      if (!node) {
        return;
      }
      travese(node.left);
      arr.push(node);
      travese(node.right);
   }
   travese(root);
   for (let i = 0; i< arr.length; i ++) {
    if (arr[i] > arr[i + 1]) {
      !first && (first = arr[i]);
      second = arr[i + 1];
    } 
    const tem = first.val;
    first.val = second.val;
    second.val = tem;
 }
}