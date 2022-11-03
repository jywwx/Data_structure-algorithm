/**
 *小偷又发现一个新的可行窃的地区。这个地区只有一个入口，我们称之为root。
 
 除root之外，每栋房子有且只有一个‘父’房子与之相连，一番侦查之后，聪明的小偷
 意识到这个地方的所有房屋的排列类似于一颗儿查护士。如果两个直接相连的房子在
 通一晚上被打劫，房屋将自动报警。

 给定二叉树root。 返回在不触动警报的情况下，小偷能够盗取的最高金额。
 */

 var rob = function (root) {
    const dfs = function (node) {
      if (!node) {
         return [0,0];
      }
      const left = dfs(node.left);
      const right = dfs(node.right);
      const doSteal = node.val + left[0] + right[0];
      const doNotSteal = Math.max(...left) + Math.max(...right);
      return [doNotSteal, doSteal];
    }
    return Math.max(dfs(root));
 }