/**
 * 有效ip 地址正好由四个整数（每个整数位于0到255之间组成，且不能含有前导0），整数之间用‘。’分隔。
 * 
 *    例如：“0.1.2.201” 和“192.168.1.1”是有效ip地址，
 *     但是“0.011.255.245” ,“192.168.1.312”和“192.168@1.1”是无效IP地址。
 * 
 * 给定一恶搞只包含数字的字符串s,用以表示一个IP地址，返回所有可能的有效IP地址，这些地址可以通过在s中插入‘.’来形成。
 * 你不能重新排序或删除s中的任何数字。你可以按任何顺序返回答案。
 */
/**
 * 
 * @param {*} s 
 */
var restoreIpAdesses = function (s) {
   const ret = [];
   const path = [];
   backtrack(0);
   return ret;

   function backtrack(index) {
     if (path.length > 4) {
        return;
     }

     if (path.length === 4 && index === s.length ) {
        ret.push([...path]);
     }

     for (let i = index; i < s.length; i ++) {
       const str = s.substr(i, j - i + 1);
       if ((Number(str) > 255) || (str.length > 1 && str[0] === '0')) {
          break;
       }
       path.push(str);
       backtrack(index + 1);
       path.pop();
     }
   }
}
console.log(restoreIpAdesses('25525511135'),"//")
