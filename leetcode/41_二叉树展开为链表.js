/**
 * 给你二叉树的根节点root, 请你将他展开为一个单链表:
 *  展开后的单链表应该同样适用TreeNode， 其中right 子指针指向链表中下一个节点， 而左子指针始终为null
 *  展开后的单联保应该与二叉树 先序遍历顺序相同。
 */

var flatten = function (root) {

    function preTravese (root,list) {
       if (root) {
        list.push(root);
        preTravese(root.left,list);
        preTravese(root.right,list);
       }
    }

    const list = [];
    preTravese(root,list);
    for (let i = 1; i < list.length; i ++) {
      const prevNode = list[i - 1]; 
      const curNode = list[i];
      prevNode.left = null;
      prevNode.right = curNode;
    }
}