/**
 * 给你一个字符传s ，颠倒字符串中单词的顺序。
 * 
 * 单词是由非空字符串组成的字符串。s中使用至少一个空格将字符串单词分隔开。
 * 
 * 返回单词的顺序颠倒且 单词之间用耽搁空格链接的结果字符串。
 * 
 * 注意： 输入字符串s中可能会存在前导空格，尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅
 * 用单个空格分隔，且不包含任何额外的空格。
 */
/**
 * 
 * @param {*} s 
 */
var reverseWords = function (s) {
   let left = 0, right = s.length - 1;
   let world = '';
   const queue = [];
   while (s.charAt(left) === ' ') {
      left ++;
   }

   while (s.charAt(right) === ' ') {
      right --;
   }

   while (left <= right) {
      const ch = s.charAt(left);
      if (ch === ' ' && world) {
        queue.unshift(world);
      } else if (ch) {
        world += ch;
      }
   }
   queue.unshift(world);
   return queue.join('');
}