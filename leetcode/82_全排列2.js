/**
 * 给定一个可包含重复数字的序列 nums，
 * 按任意顺序 返回所有不重复的全排列
*/
var permuteUnique = function (nums) {
//    const ret = [];
//    const path = [];
//    bactrack();
//    return ret;
//    function bactrack() {
//       if (path.length === nums.length) {
//         ret.push([...path]);
//         return
//       }

//       for (let j = 0; j < nums.length; j ++) {
//         if (path.includes(nums[j])) {
//            continue;
//         }
//         path.push(nums[j]);
//         bactrack();
//         path.pop();
//       }
//    }
}

var permuteUnique2 = function (nums) {
  // 输入的数组 数字有重复， 但是排列 不重复
   const ret = [];
   const path = [];
   bactrack([]);
   return ret;
   function bactrack(used) {
      if (path.length === nums.length) {
        ret.push([...path]);
        return
      }

      for (let j = 0; j < nums.length; j ++) {

        if (nums[j] === nums[j-1] && !used[j - 1]) {
          continue;
        }

        if (!used[j]) {
            used[j] = true;
            path.push(nums[j]);
            bactrack(used);
            path.pop();
            used[j] = false;
        }
      }
   }

}

console.log(permuteUnique2([1,1,2]),"sadas")