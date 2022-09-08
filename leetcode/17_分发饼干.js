/**
 * 题目描述要求
 * 假设你是一位很棒的家长,想要给你的孩子们一些饼干。但是,每一个孩子最多只能给一块饼干
 * 对每个孩子i, 都有一个胃口,这是能让孩子们满足胃口的饼干的最小尺寸;并且每块饼干j,都有一个吃尺寸
 * s[j]。如果s[j] >= g[i] ,我们可以将这个饼干j 分配给孩子 i, 这个孩子会得到满足。你的目标是尽可能
 * 满足越多数量的孩子,并且输出这个最大值
 */


var findContentChildren = function (g,s) {
   g.sort((a,b) => a -b);
   s.sort((a,b) => a -b);

   let index = s.length - 1;
   let ret = 0;
   for (let i = g.length -1; i >= 0; i --) {
    if (index >= 0 && s[index] >= g[i]) {
        ret ++;
        index --;
    }
   }
   return ret;
}

const g = [1,2,3];
const s = [1,1];
console.log(findContentChildren(g,s));