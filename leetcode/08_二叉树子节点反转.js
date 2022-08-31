
// 构造二叉树 数据

function TreeNode (val,left,right) {
   this.val = val ? val : 0;
   this.left = left ? left : null;
   this.right = right ? right : null;
}
const left1 = new TreeNode(1,new TreeNode(2),new TreeNode(3));

const right2l = new TreeNode(5, new TreeNode(6), new TreeNode(7));

const right1 = new TreeNode(4,right2l, new TreeNode(8));

const root = new TreeNode(0,left1,right1);
// console.log(root,"root");


/**
 * 
 * @param {*} root 
 * 解法一通过递归 反转二叉树
 */

console.log(root)
const invertTree = (root) => {
    if (root) {
        invertTree(root.left);
        invertTree(root.right);
        [root.left, root.right] = [root.right,root.left]
    }
}

const invertTree2 = (root) => {
    if (!root) {
      return root;
    }
    [root.left,root.right] = [invertTree2(root.right),invertTree2(root.left)];
    return root;
}


// 遍历Tree
const iteratorForTree = (root) => {
    if (!root) {
      return null;
    }
    const result = [];

    const stack = [];
    stack.push(root);

    while (stack.length) {
       const cur = stack.pop();
       result.push(cur.val)
       if (cur.left) {
        stack.push(cur.left) 
       }

       if (cur.right) {
        stack.push(cur.right)
       }
    }
    console.log(result,"result")
}



// invertTree2(root);
console.log(iteratorForTree(root));
// console.log(root)