/**
 * 题目要求描述
 * 
 * 
 * 在柠檬水滩上, 每一杯柠檬水的售价为5美元。 顾客排队购买你的产品, （按账单bills支付的顺序）一次购买一杯.
 * 
 * 
 * 每位顾客只卖一杯柠檬水,然后向你付5美元, 10美元或20美元。你必须给每个顾客正确找零, 也就是说净交易是每位顾客
 * 想你支付 5美元。
 * 注意,一开始你的手头没有任何零钱
 * 
 * 给你一个整数数组bills , 其中bills[i] 是第i位顾客付的账。 如果你能给每位顾客正确找零 返回true 否则返回false
 * 
 */


/**
 * 
 * @param {*} bills 
 * 
 * 
 * 1. 给5 直接收下
 * 2. 给10 兜里有5 就给他
 * 3. 给20  给一个 10 + 5 也可以 给一个 5 + 5 +5;
 *    优先给 10块
 */
const bills = [5,5,5,10,20];
var lemonadeChange = function (bills) {
  let fiveNum = 0;
  let tenNum = 0;

  for (let i = 0; i < bills.length; i ++) {
     const bill = bills[i];
     if (bill === 5) {
        fiveNum += 1;
     } else if (bill === 10) {
        if (fiveNum > 0) {
            fiveNum -= 1;
            tenNum += 1;
        } else {
            return false
        }
     } else {
        if (tenNum > 0 && fiveNum > 0) {
            tenNum -= 1;
            fiveNum -= 1;
        } else if (fiveNum > 2) {
            fiveNum -= 3;
        } else {
            return false;
        }
     }
  }
  return true;
}
console.log(lemonadeChange(bills));