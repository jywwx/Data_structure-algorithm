#  刷题章节

## 强化练习 解决刷题之后就忘  解决遇到类似的题 无法给出解决方案

## 150 题 分门别类 
1. 链表
  、、、js
  遍历单链表遍历
  while (head) {
     head = head.next;
  }
  return head;

  定义链表的哨兵节点

  let dummy = {
    next:head
  }

  while (dummy.next) {
      dummy.next =  dummy.next.next;
  }

  return dummy.next;
  避免很多的空节点判断逻辑

2. 数组 
  、、、
  遍历
  for (let i = 0; i < arr.length; i ++) {
    arr[i]
  }
3. 树   前端最需要刷的数据结构 ！！！
   树的遍历一般针对二叉树
   

   栈结构 遍历二叉树
   function walk (tree) {
     if (!tree) {
       return null;
     }
     const stack = [];
     const ret = [tree];
     while (stack.length) {
        const root = stack.pop();
        ret.push(root.val);
        root.right && stack.push(root.right)
        root.left && stack.posh(root.left);
    }
    return ret;
   }

   递归遍历二叉树
    function walk (tree) {

       if (!tree) {
        return null;
       }

       处理treeNode 节点  进入节点  
       walk(treeNode.left);   
       walk(treeNode.right);  对应前序遍历

       walk(treeNode.left);
       处理treeNode 
       walk(treeNode.right);  对应中序遍历


       walk(treeNode);
       walk(treeNNode);  
       处理treeNode // 离开节点  对应后序遍历

    }

## 算法思想
1. 二分
2. 双指针(快慢指针,头尾指针)
   1. 链表, 数组
3. 递归 和回溯  (画递归数)
4. 动态规划 (用来求极值)
5. 贪心
6. 搜索相关(宽度有限) bfs dfs (回溯,广度优先) 搜索相关、



## 尝试认知题型
1. 盛水
2. 炒股
3. 打劫 
....

到此之后 就对工作中 面试中涉及的算法数据结构 就算掌握得比较好了



## 扩展章节
# 1.图  最难 前端也不会涉及
# 2. hash表  
# ... 更多的数据结构