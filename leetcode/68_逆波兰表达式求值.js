/**
 * 根据逆波兰表示法，求表达式的值。
 *  
 * 有效的算符号 +,-,*,/。 每个运算对象可以是整数，页可以是另一个逆波兰表达式。
 * 
 * 注意 两个整数之前的除法只保留整数部分。
 * 
 * 可以保证给定的逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为0的情况。
 * 
 */

var evalRPN = function (tokens) {
   const stack = [];
   let i = 0;
   let tem;
   while (i < tokens.length) {
      const t = tokens[i]; 
      if (t === '+') {
        tem = stack.pop() + stack.pop();
        stack.push(tem);
      } else if (t === '-') {
        const num1 = stack.pop();
        tem = num1 - stack.pop();
        stack.push(tem);
      } else if (t === '*') {
        tem = stack.pop() + stack.pop();
        stack.push(tem);
      } else if (t === '/') {
        const num1 = stack.pop();
        tem = (num1  / stack.pop()) | 0;
        stack.push(tem);
      } else {
        stack.push(Number(t));
      }
      i ++;
   }
   return stack.pop();
}

var evaRPN2 = function (tokens) {
   const calc = {
    '+':(a,b)=> a + b,
    '-':(a,b)=> b - a,
    '*':(a,b)=> a * b,
    '/':(a,b)=> (a/b) | 0
   }

   const stack = [];
   let i = 0;
   while (i < tokens.length) {
     const t = tokens[i];
     if (calc[i]) {
        stack.push(calc[i](stack.pop(),stack.pop()));
     } else {
        stack.push(Number(i));
     }
     i ++
   }
   return stack.pop();
}