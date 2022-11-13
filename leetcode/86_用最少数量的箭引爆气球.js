/**
 * 有一些球型气球贴在一堵用XY表示的墙面上,墙面上的气球记录在整数数组points，其中points[i] = [x_start,x_end]表示
 * 水平直径x_start 和 x_end 之间的气球。你不知道气球确切y坐标。
 * 
 * 一支箭可以沿着x轴从不同点完全垂直的射出 在坐标x处射出一支箭,若有一个气球的直径的开始坐标和结束坐标x_start 和 x_end
 * 且满足 x_start <= x <= x_end,则该气球会被引爆。可以射出的弓箭数量没有限制，弓箭被射出，可以无限地前进。
 * 给你一个数组points，返回引爆所有气球所必须射出的最小弓箭数。
 */

/**
 * 
 * @param {*} points 
 * @returns 
 */
const points = [[1,6],[2,8],[7,12],[10,16]];
var findMinArrowShot = function (points) {
   points.sort((a,b) => a[0] - b[0]);
   let result = 0;
   for (let i = 0; i < points.length; i ++) {
      if (points[i][0] > points[i -1][1]) {
        result ++;
      } else {
         points[i][1] = Math.min(points[i][0],points[i - 1][1]);
      }
   }
   return result;
}