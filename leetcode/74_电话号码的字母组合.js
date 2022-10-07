/**
 * 给定一个仅包含数字2-9的字符串，返回所有它能表示的字母组合。大难可以按任意顺序返回。
 * 给出数字到字母的音社如下(与电话按键相同)。注意1不对应任何字母。
 */
/**
 * 
 * @param {*} digits 
 */
var letterCombinations = function (digits) {
    
    const len = digits.length;
    const map = [ ' ',' ','abc','def','ghi','jkl','mon','prqs','tuv','wxyz'];
    const ret = [];
    const path = [];
    if (!len) {
      return [];
    }
    
    if (len === 1) {
      return map[digits].split('');
    }

    backtrack(digits,len,0);
    return ret;
    function backtrack(digits,l,i) {
      if (l === i) {
         ret.push(path.join(''));
         return;
      }

      for (const v of map[digits[i]]) {
         path.push(v); 
         backtrack(digits,l,i+1);
         path.pop(); 
      }
    }



    // 回溯基本公式
    // 外层终止条件
    // 遍历：
    // backTrack()
    // function backTrack () {
    //     // 内层终止条件

    //     //标价
    //     //backTrack();
    //     //撤回标记
    // }
}
console.log(letterCombinations('23'))