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


#### 数据结构
1.链表
```js 
// 遍历方法
  // 方法1:
  while (head) {
    head = head.next;
  }
  return head;
  //// 链表遍历的哨兵模式
  let dummny = {
    next: head
  }
  ...
  return dummny.next
```
2.数组
```js
for (let i = 0; i < arr.length; i ++) {
  arr[i]
}
```
3.树  前端最需要的数据结构！！！其实就是dom 虚拟dom
```js
(二叉树)
  // 递归  深度优先遍历
  function walk (treeNode) {
    if (!treeNode) {
      return treeNode;
    }
    // 前序遍历
    {
       console.log(treeNode.val);
       walk(treeNode.left);
       walk(treeNode.right);;
    }
    // 中序遍历
    {
       walk(treeNode.left);
       console.log(treeNode.val);
       walk(treeNode.right);;
    }
    // 后序遍历
    {
       
       walk(treeNode.left);
       walk(treeNode.right);
      console.log(treeNode.val);
    }
  }

  // 通过栈的方式遍历二叉树 利用栈
  function walk (treeNode,res = []) {
     if (!treeNode) {
        return treeNode;
     }

     const stack = [treeNode];
     let cur = null;

     while (stack.length) {
       cur = stack.pop();
       res.push(cur.val); // 处理cur 的位置决定前中后序
       cur.left && stack.push(cur.left)
      cur.right && stack.push(cur.right)
     }
  }

  // 二叉树层序遍历 广度优先 利用队列
  function walk (treeNode,res = []) {
    if (!treeNode) {
      return treeNode;
    }
    const queue = [treeNode];
    while (queue.length) {
      const len = queue.length;
      const curLevel = []
      while (len --) {
        const node = queue.shift();
        curLevel.push(node.val);
      }
      res.push(curLevel)
    }
  }
``` 
##### 算法思想
1.二分(搜索)
```js
  // 有序数组里,找一个数字,如果复杂度高，可以优先考虑先排序
  // n 到log n 的时间复杂度优化
  let left = 0, right = arr.length - 1;

  while (left < right) {
    let mid = (left + right) >> 1;
    if (arr[mid] < nuns[i]) {
      left = mid + 1;
    } else {
      right = mid;
    }

    // 或者 尚没到达精通 还得专门一节课
    let mid = (left + right) >> 1;
    if (arr[mid] < nums[i]) {
      left = mid + 1;
    } else if (arr[mid] === nums[i]) {
      right = mid
    }
  }
  // while left < right 还是 left <= right
  // left = mid 还是Mid + 1
  // right = mid 还是 mid - 1
  // 搜素一个元素的时候 通常 <= mid 需要 +- 1
  // 搜索便捷的时候， mid + 1,mid, left < right
```
2 双指针
  2.1 适用于链表，数组 后续补充详细
```js
   // 快慢指针
   let fast = head;
   let slow = head;
   while (fast && fast.next) {
    // 怎么走看需求
   }

   // 头尾指针针对数组进行遍历 好使
   let i = 0, j = arr.length -1;
   while (i < j) {

     i++;
     j--;
   }
```   
3.递归和回溯 (画递归树) ！！！！重点，树的题目
```
  function backtrack(数据，路径缓存) {
    终止条件 处理返回当前路径数据
    循环：(每次取下一个值（全排列就不一定）) {
      标记
      backtrack(数据，路径缓存)
      取消标记
    }
  }
```
4.动态规划 ！！！！重点  
  dp
<!-- 你要清楚， 结果是怎么推导出来的 重要的是递推公式
  1，2，5三种零钱，怎么最好的赵处11块钱
    dp[11] 11块钱这个值得找零的最优解
    Min(dp[10],dp[9],dp[6]) 这三个的最优解 + 1
 -->

 // 边界条件
 // 循环：
 //    递推公式
 

 // 循环硬币
 //  dp[n] n的钱数下，返回零钱的最优解

 1. 暴力解(画图)
 2. 研究优化，加备忘录
 3. 递推

 5. 贪心
     没有公式 具体问题具体分析
 6. bfs（宽度优先） dfs(回溯，广度优先)
 7. 其他
    bfs
    位运算 前端授权 鉴权 取消授权 最佳实践
 


  





  




