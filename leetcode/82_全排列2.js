/**
 * 给定一个可包含重复数字的序列 nums，
 * 按任意顺序 返回所有不重复的全排列
 * 
 * 全排列 源输入数组 不存在重复项
*/
var permuteUnique = function (nums) {
   const ret = [];
   const path = [];
   bactrack();
   return ret;
   function bactrack() {
      if (path.length === nums.length) {
        ret.push([...path]);
        return
      }

      for (let j = 0; j < nums.length; j ++) {
        if (path.includes(nums[j])) {
           continue;
        }
        path.push(nums[j]);
        bactrack();
        path.pop();
      }
   }
}

var permuteUnique2 = function (nums) {
  // 源输入数组存在 重复项
  // 输入的数组 返回结果数字有重复， 但是排列 不重复

  const ret = [];
  const path = [];
  nums.sort();
  return ret;

  function bactrack(used) {
    
    if (path.length === nums.length) {
      ret.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i ++) {
       if (nums[i] === nums[i - 1] && !used[i]) {
          continue;
       } 

      if (!used[i]) {
        used[i] = true;
        path.push(nums[i]);
        bactrack(used);
        path.pop();
        used[i] = false;
      }
    }
  }

}

console.log(permuteUnique2([1,1,2]),"sadas")