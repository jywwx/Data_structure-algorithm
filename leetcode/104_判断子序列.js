/**
 * 给定字符串s 和 他,判断是否为t 的子序列。
 * 字符串的一个子序列是原始字符串删除一些（也可不删除）字符而不改变剩余字符相对位置
 * 形成的新字符串。(例如，‘ace’ 是‘abcde’的一个子序列)，而且‘aec’不是。
 * 
 * 进阶：
 * 如果有大量输入的S，称作S1,S2,...,Sk其中k>= 10 亿，你需要一次见擦他们是否为T的子
 * 序列。在这种情况下，你会怎样改变代码？
 */

var isSubsequence = function (s,t) {
   // dp
   // 下标i结尾的字符串s， 和下标j 结尾的字符串t， 相同子序列的长度
   // dp[i][j]

    //    if (s[i - 1] === t[j - 1]) {
        
    //    } else {
    //       // 删除元素
    //    }

    const m = s.length;
    const n = t.length;

    const dp = Array(m + 1).fill(0).map((item) => Array(n + 1).fill(0));
    for (let i = 1; i <= m; i ++) {
      for (let j = 1; j <= n; j ++ ) {
        if (s[i - 1] = t[j - 1]) {
           dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
            dp[i][j] = dp[i][j - 1];
        }
      }
    }
    console.log(dp,"dps")
    return dp[m][n] === m;
}

isSubsequence('c','abc')