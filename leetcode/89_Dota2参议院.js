/**
 * Dota2 的世界里有两个阵营: Radiant(天辉)和Dire(夜魔)
 * 
 * Dota2 参议院由来自两派的参议院组成。现在参议院希望对一个Dota2游戏里的改变做出决定。他们以一个基于轮为过程的投票进行。
 * 在每一轮中，每一位参议院都可以行驶两项权利中的一项：
 * 1. 禁止一名参议院的权利：
 *    参议员可以让另一位参议员 在这一轮 和随后的几轮中丧失所有的权利。
 * 2. 宣布胜利：
 *    如果参议员发现有权利投票的参议员都是同一个阵营，他可以宣布胜利并决定在游戏中的有关变化。
 * 
 * 给定一个字符串代表每个参议员的阵营。字母‘R’ 和‘D’分别代表了Radiant (天辉) 和Dire(夜魔)。然后，如果有N个参议员，给定字符串的
 * 大小将是n。
 * 
 * 以轮为基础的过程从给定顺序的第一个参议员开始到最后一个参议员结束。这一过程将持续到投票结束。所有失去权利的参议员将在过程中被跳过。
 * 假设每一位参议员都足够聪明，会为自己的政党做出最好的策略，你需要预测那一方最终会宣布胜利并在DOta2游戏中决定改变。输出应该是Radiant 或Dire
 */
var preictPartyVictory = function (senate) {
    const queue = senate.split('');
    const stack = [];
    while (queue[0]) {
      const s = queue.shift();
      if (!stack.length || s === stack[stack.length - 1]) {
        stack.push(s);
      } else {
        queue.push(stack.pop());
      }
    }
    return stack[0] === 'R' ? 'Radiant' : 'Dire';
    
}
console.log(preictPartyVictory('RDD'));
