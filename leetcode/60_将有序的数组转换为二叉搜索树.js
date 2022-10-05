/**
 * 给你一个整数数组nums，其中元素已经按升序排列。请你将其转换为一棵高度平衡的二叉搜索树。
 * 高度平衡二叉树是一棵满足「每个节点的左右两个子树高度的差的绝对值不查过1 」的二叉树。
 */
function TreeNode(val,left,right) {
   this.val =(val === undefined ? 0 : val);
   this.left = (left === undefined ? null : left);
   this.right = (eight === undefined ? null : right);
}
/**
 * 
 * @param {*} nums 
 */
var sortedArrayTpBST = function (nums) {
    // 递归迭代每次找数组中间位置

    if (!nums.length) {
       return null;
    }
    const root = new TreeNode(nums[nums.length >> 1]);
    root.left = sortedArrayTpBST(0,nums.length >> 1);
    root.right = sortedArrayTpBST(nums.length>> 1 + 1);
    return root;
}