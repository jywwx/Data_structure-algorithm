
/**
 * 有序数组的平方
 * @param {*} nums 
 */
var sortedSquares = (nums) => {
   

    if (nums.length < 0) {
       return [];
    }
    let left = 0,right = nums.length - 1;

    let k = right;

    while (left <= right) {
      const lv = nums[left];
      const rv = nums[right];

      if (lv > rv) {
        nums[k] = rv;
        right --;
      } else if (lv < rv) {
        nums[k] = lv;
        left ++
      }
      k --;
    }
    return nums;
}