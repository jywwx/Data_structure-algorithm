/**
 * 一个机器人位于一个 m x n 网格的左上角(起始点在网格的左上角记为'start')
 *  机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角
 * 记为finish
 * 
 * 问总共有多好条不同的路径？
 */

var uniquePaths = function (m,n) {
   const dp = Array(m).fill('').map((i) => Array(n).fill(''));

   for (let i = 0; i < m; i ++) {
      dp[i][0] = 1;
   }
   for (let j = 0; j < n; j ++) {
      dp[0][j] = 1;
   }

   for (let i = 1; i<m; i ++) {
      for (let j = 1; j < n; j ++) {
         dp[i][j] = dp[i-1][j] + dp[i][j -1];
      }
   }

   return dp[m -1][n - 1];
}