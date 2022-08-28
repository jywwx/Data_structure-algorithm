const nums = [2,7,11,15];


//题目要求 返回数组的两个树之后 等于 目标值得 索引 切该数组只有唯一解
/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns Array<number>
 */
const twoSum = (nums,target) => {
    for (let i =0; i< nums.length; i++) {
      for (let j=0;j< nums.length; j++) {
        if (nums[i] + nums[j] === target && i !== j) {
          return [i,j];
        }
      }   
    } 
}

/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
const twoSum2 = (nums,target) => {
    const hashTab = {};
    for (let i =0; i< nums.length; i++) {
       const num = nums[i];
       const curTarNum = target - num;
       if (num in hashTab) {
         return [i,hashTab[num]]
       } else {
         hashTab[curTarNum] = i;
       }
    }
   
    console.log(hashTab)
}

console.log(twoSum2(nums,9))