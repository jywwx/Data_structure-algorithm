/**
 * 给定一个单链表的头节点head, 其中的元素按照升序排列，将其转换为高度平衡的二叉搜索树。
 * 
 * 本地中，一个高度平衡的二叉树是指一个二叉树每个节点的左右两个子树的高度相差不超过1;
 */


function TreeNode (val,left,right) {
     this.val = (val === undefined ? 0 : val);
     this.left = (left === undefined ? null : left);
     this.right = (right === undefined ? null : right);
}

/**
 * 
 * @param {*} head 
 */
// 先将升序链表转换成数组
// 再将升序数组转换成平衡二叉搜索树
var sortedListToBST = function (head) {
   // 先将有序链表转换成 有序数组 
   // 然后第二部将 有序数组转换成 平衡二叉搜索树
   
   const arr = [];
   let cur = head;
   while (cur) {
     arr.push(cur.val);
     cur = cur.next;
   };
   const sortedArrayToBST = (nums) => {
      if (!nums.length) {
        return null;
      }
      const root = new TreeNode(nums[nums.length >> 1]);
      root.left = travese(nums.slice(0,nums.length >> 1));
      root.right = travese(nums.slice(nums.length >> 1 + 1));
      return root;
   }
   return sortedArrayToBST(arr);
}

/**
 * 
 * @param {*} head 
 */
// 通过快慢指针 找到链表的中间节点
var sortedLsitTpBST2 = function (head) {
   const travese = (head,tail) => {
      if (head === tail) {
         return null;
      }

      let slow = fast = head;

      while (fast !== tail && fast.next !== tail) {
         slow = slow.next;
         fast = fast.next.next;
      }
      const root = new TreeNode(slow.val);
      root.left = travese(head,slow);
      root.right = travese(slow.next,tail);
      return root;
   }
   travese(head,null);
}


