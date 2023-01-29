// 全排列
/**
 *
 * @param {*} nums
 */
var permute = function (nums) {
  function backTrack(temp) {
    if (temp.length === nums.length) {
      list.push([...temp]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (temp.include(nums[i])) {
        continue;
      }
      temp.push(nums[i]);
      backTrack(temp);
      temp.pop();
    }
  }
  const list = [];
  backTrack([]);
  return list;
};

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

console.log(permute([1, 2, 3]));
