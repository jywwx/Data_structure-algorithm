/**
 * 给定两个整数n 和 k， 返回返回[1，n] 中所有可能的k个数的组合。
 * 你可以按 任何顺序 返回答案
 */

var combine = function (n,k) {
   const list = [];
   const path = [];
   backtrack(n,k,1);
   return list;
   function backtrack (n,k,i) {
    if (path.length === k) {
       list.push([...path]);
       return;
    }

    for (let j = i; j <= n - k + path.length + 1; j ++) {
       path.push(j);
       backtrack(n,k,j + 1);
       path.pop();
    }

   }
}
console.log(combine(4,2),"///")