/**
 * 给定一个二叉树,找出其最小深度。
 * 最小深度是从根节点 到最近叶子结点的最短路径上的节点数
 */
// 回看到此题时 回想下 二叉树的最深 节点数  一个最深 一个最小 本地求最小深度
/**
 * 
 * @param {*} root 
 */
var minDepth = function (root) {
   if (!root) {
     return 0;
   }

   if (!root.left && !root.right) {
     return 1;
   }

   if (root.left && !root.right) {
     return minDepth(root.left) + 1;
   }

   if (root.right && !root.left) {
    return minDepth(root.right) + 1;
   }   

   return Math.min(minDepth(root.left),minDepth(root.right)) + 1;
}

// 递归实现
var minDepth = function (root) {
    if (!root) {
      return 0;
    }
    let dep = 0;
    const stack = [root];
    

    while (true) {
      let size = stack.length;
      dep ++;
      // 精确的控制遍历的个数
      while (size --) {
        const node = stack.shift();
        if (!node.left && !node.right) {
           return dep;
        }

        node.left && stack.push(node.left);
        node.right && stack.push(node.right);
      }
    }

}