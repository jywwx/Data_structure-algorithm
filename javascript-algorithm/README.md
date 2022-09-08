## 搜索 排序 都是基础问题
## 排序算法: 如何吧一个数组变成有序的 
## arr = [3,2,1,4]
## 增删改查几个操作  不用语言本省的高级排序方法


# 算法思想
### 排序 ###
## 冒泡排序  想想思路
## 二分快速排序  两个数组 
## 二分思想原地快速排序

### 二分 ###
### 递归 ###
### 回溯 ###
### 贪心 ###
每一步都选择当前最优解,跟之前的选择没有关系
1. 找零钱(最少张数)
   1. 100,50,20,10,5,1
   2. 每一次都可以按照这个当前能找的最大值 最终能够得出全局最优解 (没有反例)
### 动态规划 ###
求极值
每一步的状态, 是前一步推到而来的
    2     100     10
1   3     6       9
    4     7       3
走每一步 都保存一个不同状态的最后解
走迷宫 每一步 都有数字 怎么走能够 最终的数字之和 最小  贪心 加二分


Vue 中的虚拟Dom diff  最常递增子序列；