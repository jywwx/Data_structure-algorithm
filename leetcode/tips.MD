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
  二分搜索相关 效率最高 
  有序的数组里 找一个数字, 如果整体复杂度高,可以考虑先排序
、、、
  // 找到arr 中第一个比nums[i]大的数字 修改它
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = (left + right ) >> 1;
    if (arr[mid] < arr[i]) {
      left = mid + 1
    } else {
      right = mid;
    }
  }
  arr[left] = nums[i];
、、、
2. 双指针(快慢指针,头尾指针)
   1. 链表, 数组
、、、
  let fast = head;
  let slow = head; 

  while (fast && fast.next) {
     // 怎么走 看需求
  }
  ----

  let i = 0, let j = arr.length - 1;
  let i = 0, let j = 0;
、、、


3. 递归 和回溯  (画递归数) !!! 重点  树的题目  
、、、
  function backTrack () {
    循环: (每次取下一个值)
      标记
      backTrack(数据,路径缓存)
      取消标记
  }
、、、


4. 动态规划 (用来求极值)  ！！！ 重中之重  面试中最难的题
   你要想清楚, 结果是怎么推导出来的
   1,2,5三种零钱,怎么最好的找出11块钱 钱数最少
  dp[11]  11 块钱这个值找零 最佳 解决刷题之后就忘
  Math.min(dp(10):11 - 1,dp(9):11 - 2,dp(6): 11 - 5) 三个值中的最小的值 + 1;

  // 主要想清楚终止条件

  // 边界条件
  // 循环:
  //    递推公式
  // 循环硬币
  // dp[n]  n的钱数下, 返回零钱的最优解

  暴力解(画图)
  研究优化,加备忘录
  递推

5. 贪心
    没有公式 
    写完暴力解 优化
    动态规划求最极大极小值
6. 搜索相关(宽度有限) bfs dfs (回溯,广度优先) 搜索相关、


#   其他
1. bfs
2. 位运算
3. 最难 前端也不会涉及
4. hash表 

## 尝试认知题型
1. 盛水
2. 炒股
3. 打劫 
....

到此之后 就对工作中 面试中涉及的算法数据结构 就算掌握得比较好了





## 扩展章节
# 1.图  最难 前端也不会涉及
# 2. hash表  前端中的对象
# 3. 堆 (二叉堆)
# 4. 图（简化）实际的工程场景
# ... 更多的数据结构

# 算法思想  重要的章节
# 排序
# 排序数组 快速排序 冒泡排序 原地排序 面试经常问 
# 二分思想
#   快排
#   二分查找  二叉搜索 搜索


## 回溯和搜索   ****** 最重要 应用最多 脑子更灵活 面试高端常问
# 全排列
# 单词搜索


# 贪心算法 *****  重要
## 跳跃游戏
## 最长递增子数列
## 分发饼干
## 柠檬水找零钱


## 动态规划 ******  最重要 应用最多 脑子更灵活 面试高端常问
  # 斐波那契数列
  # 零钱兑换


