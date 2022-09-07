

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
console.log(permute([1,2,3]))