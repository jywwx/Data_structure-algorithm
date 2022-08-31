

// 删除值等于val 的链表节点 并返回 新的链表头节点

/**
 * 
 * @param {*} head 
 * @param {*} val 
 * 递归写法
 */
// 1=> 2=> 3=> 4   head = 1 val = 4

const linkList = {
   val:1,
   next:{
      val:2,
      next:{
         val:3,
         next:{
            val:4,
            next:null
         }
      }
   }
}



const removeElement = (head,val) => {
   console.log(head,"start")
   if (head === null) {
      return head;
   }
   head.next = removeElement(head.next, val);
   const ret = head.val === val ? head.next : head;
   console.log(ret,"end")
   return ret;
}

/**
 * 
 * @param {*} head 
 * @param {*} val 
 * 遍历写法删除 链表元素
 */
const removerElement2 = (head,val) => {
   let p = head;
   while (p.next) {
     if (p.val === val) {
       p.next = p.next.next;
     } else {
        p = p.next;
     }
   }
   return head;
}

console.log(removeElement(linkList,4),"finally");