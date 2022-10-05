/**
 * 题目介绍
 * 
 * 给定一个不重复的整数数组nums，最大二叉树可以用下面的算法从nuns递归地构建
 * 1.创建一个根节点，其值为nums中的最大值
 * 2.递归地在最大值 左边 的 子数组前缀上构建左子树。
 * 3.递归地在最大值 右边 的 子数组后缀上构建右子树
 * 返回nums 构建的最大二叉树
 */
 function TreeNode (val,left,right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

/**
 * 
 * @param {*} nums 
 */
const contructMaximumBinaryTree = function (nums) {
     const trevese = (nums) => {
        if (!nums.length) {
           return null;
        }

        const max = Math.max(...nums);
        const index = nums.indexOf(max);

        const root = new TreeNode(max);
        root.left = trevese(nums.slice(0,index));
        root.right = travese(nums.slice(index + 1));
        return root;
     }
     return trevese(nums);
}