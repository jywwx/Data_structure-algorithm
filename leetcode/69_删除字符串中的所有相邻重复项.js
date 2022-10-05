/**
 *  给出由小写字母组成的字符串s，重复项删除操作会选择两个相邻且相同的字母，并删除他们。
 * 
 * 在S上反复执行重复项删除操作，直刀无法继续删除。
 * 在完成所有重复项删除操作后返回最终的字符串。 大难保证唯一。
 */
/**
 * 
 * @param {*} s 
 * @returns 
 */
var removeDuplicates = function (s) {
   const stack = [];
   let i = 0;
   while (i < s.length) {
    const t = s[i];
    const tem = stack.pop();
    if (t !== tem && stack.length) {
      stack.push(tem);
      stack.push(t);
    }
    stack.length && (stack.push(t));
    i ++;
   }
   return stack.join('');
}


var removeDuplicates2 = function (s) {
    const stack = [];
    for (const t of s) {
       if (stack.length && t === stack.pop()) {
          continue;
       }
       stack.push(t);
    }
    return stack.join('');
}


var removeDumlicates = function (s) {
   const stack = [];
   for (const t of s) {
      if (stack.length && t === stack[stack.length -1]) {
        stack.pop();
        continue;
      }
      stack.push(t);
   }
   return stack.join('');
}
