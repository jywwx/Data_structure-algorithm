/**
 * 给你两棵二叉树的节点p 和 q，编写一个函数来检验这两棵树是否相同
 * 
 * 如果两棵树在结构上相同,并且节点具有相同的值 则任务 他们是相同
 */
/**
 * 
 * @param {*} p 
 * @param {*} q 
 */
var isSameTree = function (p,q) {
   if (p == null && q === null) {
     return true
   }

   if (p === null || q === null) {
     return false
   }

   if (p.val !== q.val) {
     return false
   }

   return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
}

var isSameTree2 = function(p,q) {
    const reverse = function(p,q){
        if (p == null && q === null) {
          return true
        }
    
        if (p === null || q === null) {
          return false
        }
    
        if (p.val !== q.val) {
          return false
        }
        const left = reverse(p.left,q.right);
        const right = reverse(p.right,q.right);
        if (left && right) {
           return true;
        }

        return false;
    }
}
     
// 迭代实现
var isSameTree3 = function(p,q) {
  if (p == null && q === null) {
    return true
  }

  if (p === null || q === null) {
    return false
  }
  const pStack =[p],qStack=[q];
  while (pStack.length && qStack.length) {
    const curP = pStack.pop();
    const curQ = qStack.pop();
    if (curP.val !== curQ.val) {
      return false;
    }
    curP.left && pStack.push(curP.left);
    curP.right && pStack.push(curP.right);
    curQ.left && qStack.push(curQ.left);
    curQ.right && qStack.push(curQ.right);
  }
  return true;
}