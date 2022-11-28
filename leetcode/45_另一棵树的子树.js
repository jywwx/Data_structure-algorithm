/**
 * 给你两棵二叉树 root 和subRoot。 检验root中是否包含和subRoot 具有相同结构和节点值的子树。
 * 如果存在返回true， 否则返回false
 * 
 * 二叉树tree 的一棵子树包括tree的某个节点和这个节点的所有后代接待。tree也可以看作他自身的一棵子树
 */

var isSubTree = function (root,subTree) {
   function isSameTree(p,q) {
     if (p === null && q === null) {
        return true
     }
     if (p || q) {
        return false
     }
     if (p.val !== q.val) {
       return false
     }
     return isSameTree(p.left,q.left) && isSameTree(p.right,q.right)
   }

   if (!root) {
     return false;
   }

   if (root.val === subTree.val) {
     if (isSameTree(root,subTree)) {
        return true
     }
   }

   return isSameTree(root.left,subTree) || isSameTree(root.right,subTree);

}

function isSubTree (root,subtree) {
  function isSametree(p,q) {
     if (p === null && q === null) {
        return true
     }

     if ([p,q].includes(null)) {
        return false
     }

     if (p.val === q.val) {
        return true;
     }
     return isSubTree(p.left,p.right);
  }

  if (!root) {
    return false;
  }
  
  if (root.val === subtree.val) {
    if (isSametree(root,subtree)) {
      return true
    }  
  }

  return isSameTree(root.left,subTree) || isSameTree(root.right,subTree);
}