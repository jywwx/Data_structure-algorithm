/**
 * 一个机器人 位于 m x n 网格的左上角(起始点在下图中标记为'start')
 * 
 * 机器人每次只能向下或者向右移动一步。机器人试图到达网格的右下角
 * (在下图中标记为'Finish')。
 * 
 * 现在考虑网格中有障碍物。那么从左上角到有下角会有多少条不同的路径？
 * 
 * 网格中的障碍物和空位置 分别用 1 和 0 来表示。
 */
var uniquePathWithObstacles = function (obstacleGrid) {
   const m = obstacleGrid.length;
   const n = obstacleGrid[0].length;


   const dp = Array(m).fill(0).map((i) => Array(n).fill(0));

   for (let i = 0; i < m && obstacleGrid[i][0] !== 1; i ++) {
      dp[i][0] = 1;  
   }

   for (let i = 0; i < n && obstacleGrid[0][j] !== 1; i ++) {
       dp[0][i] = 1
   }

   for (let i = 1; i < m; i ++) {
      for (let h = 1; j < n; j ++) {
        dp[i][j] = dp[i][j] === 1 ? 0 : dp[i-1][j] + dp[i][j - 1];
      }
   }
   return dp[i -1][j - 1];
}