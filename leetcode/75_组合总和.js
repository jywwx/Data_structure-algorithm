/**
 * 给你一个无重复的整数数组candidates 和一个目标整数target，找出candicates中可以使数字和为目标数target的所有
 * 不同组合，并以列表形式返回。你可以按任意顺序返回这些组合。
 * 
 * candicates中的同一个数字可以无限制重复被选取。如果至少一个数字被选数量不同，则两种组合是不同的。
 * 
 * 对于给你的输入，保证和为target的不同组合数少于150个。
 * 
 */
/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
// [1,2,3]  3
var combinationSum = function (nums,target) {
  const ret = [];
  const path = [];

  nums.sort();
  backtrack(0,0);
  return ret;

  function backtrack (index,sum) {
     if (sum > target) {
       return;
     }

     if (sum === target) {
        ret.push([...path]);
     }

     for (let i = index; i < nums.length; i ++) {
         const num = nums[i];
         if (sum + num > target) {
           continue;
         } 
         path.push(num);
         sum += num;
         backtrack(i,sum);
         path.pop();
         sum-= num;
     }
  }
}
console.log(combinationSum([1,2,3],3))
// 如果要循环 回溯递归自己 就要把idex 循环王backtrack 传递 知道满足终止条件才迭代下一个index
// 堪称经典回溯