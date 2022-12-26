/**
 * 编写一个算法来判断一个数n 是不是快乐数。
 * 
 * [快乐数] 定义为：
 *  . 对于一个正整数，每一次将该数替换为它每个位置上的数字
 *   的平方和。
 *  . 然后重复这个过程直到这个数变为1， 也可能是无限循环 但
 *    始终变不到1.
 *  . 如果这个过程结果为1， 那么这个数就是快乐数。
 * 
 *   如果n 是快乐数 就返回true，不是，则返回false。 
 */

var isHappy = function (n) {
    const getNum = (n) => {
        let sum = 0;
        while (n) {
           sum += (n % 10) ** 2;
           n = Math.floor(n / 10);
        }  
        return sum;
    }

   const cache = {};

   while (true) {
     if (n === 1) {
      return true
     }

     if (n in cache) {
       return false;
     }
     cache[n] = true;
     n = getNum(n);
   }
}

var isHappy2 = function (n) {
  const getNum = (n) => {
    let sum = 0;
    while (n) {
       sum += (n % 10) ** 2;
       n = Math.floor(n / 10);
    }
    return sum;
  } 

  let slow = fast = n;

  while (fast !== 1 && getNum(fast) !== 1) {
     slow = getNum(fast);
     fast = getNum(getNum(fast));

     if (slow === fast) {
       return false;
     }
  }

  return true;
}