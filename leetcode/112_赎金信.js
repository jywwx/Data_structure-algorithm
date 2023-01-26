/**
 *给你两个字符串ransomNote 和 magazine ,判断ransomNote 能不能由magzine 里面的字符构成。

 如果可以，返回true； 否则返回false。
 magazine 中每个字符只能在ransomNote中使用一次。
 */

var canConstruct = function (ransomNote, magazine) {
  const arr = Array(26).fill(0);
  const base = "a".charCodeAt();

  for (let m of magazine) {
    arr[m.charCodeAt() - base]++;
  }

  for (let r of ransomNote) {
    arr[r.charCodeAt() - base]--;
  }

  return arr.every((value) => value >= 0);
};
