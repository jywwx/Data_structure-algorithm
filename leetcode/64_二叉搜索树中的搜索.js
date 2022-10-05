/**
 * 给定二叉搜索树（BST）的根节点root和一个整数值val。
 * 
 * 你需要在BST中找到节点值等于val 的节点。
 * 返回以该节点为根的子树。如果节点不存在，贼返回null；
 */
/**
 * 
 * @param {*} root 
 * @param {*} val 
 */
var searchBST = function (root,val) {
    // me do
   const stack = [root];
   while (stack.length) {
      const cur = stack.pop();

      if (cur.val === val) {
       return cur;
      }
      cur.left && (stack.push(cur.left));
      cur.right && (stack.push(cur.right));
   }

   return false;
}

/**
 * 
 * @param {*} root 
 * @param {*} val 
 */
var serachBST2 = function (root,val) {
   if (!root) {
     return root;
   }

   if (root.val === val) {
      return root;
   } else if (root.val > val) {
      return serachBST2(root.left,val);
   } 
   return searchBST2(root.right,val);

}
