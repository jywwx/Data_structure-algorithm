// 二分思想

// let s = 'hello';
// console.log(s.leftpad(10),'0')

function leftpad(str,length,ch) {
   let len = length - str.length + 1;
   return Array(len).join(ch) + str;
}


// 二分的思路去优化
// 以数组长度 除以2 的频率进行数组遍历
// 如果是奇数  + 目标字符串
// 如果是偶数  目标字符串 + 目标字符串
// 终止条件 len 的1 的时候 返回 停止循环遍历
// '0'
// '0' + ‘0’
// '00‘ + ’00'
 
function leftpad2(str,length,ch) {
  let len = length - str.length,total = '';
  while (true) {
   console.log(len,'len',total,'total',ch,'ch')
    if (len & 1) {
      total += ch;
    }
    if (len === 1) {
      return total + str;
    }
    ch += ch;
    len = len >> 1;
    console.log(total);
  }
}
console.log(leftpad2('hello',26,'0'))
