

// 全排列
/**
 * 
 * @param {*} nums 
 */
var permute = function(nums) {

   const backTrack = (list,tem,nums) => {
     if (tem.length === nums.length) {
       return list.push([...tem]);
     }
     for (let i = 0; i < nums.length; i ++) {
       if (tem.includes(nums[i])) {
         continue;
       }
       tem.push(nums[i]);
       backTrack(list,tem,nums);
       tem.pop();
     }
   }
   
   const list = [];
   backTrack(list,[],nums);
   return list;
}

// 回溯的全部路径的公式
// let lsit = []
// function backTrack(list,临时路径,输入) {
//  结束条件:
//    临时路径，新增一个路径
//    循环 {
//        选择一个数据   (选择其他数据);
//        递归 backTrack (list,临时路径,输入)
//        撤回选择的数据
//    }
//  }


console.log(permute([1,2,3]))