/**
 * 编写一个函数,其作用是将输入的字符串反转过来。 输入的字符串以字符数组s
 * 的形式给出。
 *
 * 不要给另外数组分配额外控件, 你必须原地修改输入数组 使用O(1)的额外
 * 控件解决这一问题。
 *
 */
/**
 *
 * @param {*} s
 */
var reverseString = function (s) {
  // return s.reverse();
  // 如果s 是字符串 return s.split('').reverse().join('')';
  // return s.split('').reverse().join('');
  let left = 0,
    right = s.length - 1;
  while (left <= right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
  return s;
};
