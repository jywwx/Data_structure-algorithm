/**
 * 
 * 给定一个二叉搜索树的根节点root，和一个整数k，请你设计一个算法找其中第k 个最下的元素 （从1开始计数）；
 * 
 */
var kthSmallest = function (root,k) {
    //试试暴力解法？
    // 将二叉搜索树递归转变成搜索数组
    // 然后再数组中找第k个最小元素 未经验证
    // 解法存疑 未经验证
    const ret = [];
    const stack = [root];
    while (stack.length) {
       const cur = stack.pop();
       cur.left && (stack.push(cur.left));
       ret.push(cur.val);
       cur.right && (stack.push(cur.right));
    }
    return ret[k] ? null : ret[k];
}

/**
 * 
 * @param {*} root 
 * @param {*} k 
 */
var kthSamllest2 = function (root,k) {
     const stack = [];
     let count = 0;

     while (root || stack.length) {
        while (root) {
           stack.push(root)
           root = root.left;
        }
        root = stack.pop();
        count ++;
        if (k === count) {
           return root.val;
        }
        root = root.left;
     }
}