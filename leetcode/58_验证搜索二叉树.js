/**
 * 给你一个二叉树的更节点root,判断其是否是一个有效的二叉树搜索树
 * 
 * 有效二叉搜索树定义如下:
 *   节点的左子树只包含小于当前节点的树。
 *   节点的右子树只包含当前节点树
 *   所有左子树 和 右子树自身必须也是二叉搜索树
 */

const testRoor ={
    val:2,
    left:{
        val:1,
        left:null,
        right:null
    },
    right:{
        val:3,
        left:null,
        right:null
    }
}

var isValidBST2 = function (root) {
    if (!root) {
        return true;
    }
    const val = root.val;
    const left = root.left;
    const right = root.right;
    if ((left && val > left.val && right && val < right.val) || (!left && !right)) {
        return isValidBST(left) && isValidBST(right);
    } 
    return false;
}

// 二叉搜素树的本质是 二叉树按照中序遍历 其结果是 一个递增的序列

/**
 * 中序遍历递归实现
 * @param {*} root 
 */
var isValidBST = function (root) {
    const prev = 0;
    const travese = (node) => {
        if (!node) {
           return true;
        }

        const leftIsValid = travese(node.left);
        if (node.val <= prev) {
          return false;
        }
        prev = node.val;
        const rightIsValid = travese(node.right);
        return leftIsValid && rightIsValid;
    }
    return travese(root);
}
console.log(isValidBST(testRoor))