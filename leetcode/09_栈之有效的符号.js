//栈结构 验证 有效的括号 前端中的应用有 Jsx template 验证标签的合法性
//算法时间复杂度为O(n)
/**
 * 
 * @param {*} str 
 */
const isVaild = (str) => {
  const stack = [];
  let ret = true;
  for (let i =0; i< str.length; i ++) {
     if (str[i] === '(' || str[i] === '{'||str[i] === '[') {
        stack.push(str[i])
     } else if (str[i] === ')') {
        const cur = stack.pop();
         if (cur !== '(') {
            ret = false;
            break;
         }
     } else if (str[i] === '}') {
        const cur = stack.pop();
         if (cur !== '{') {
            ret = false;
            break;
         }
     }
     else if (str[i] === ']') {
        const cur = stack.pop();
         if (cur !== '[') {
            ret = false;
            break;
         }
     }
  }
  return ret;
}

// 优雅代码
const isValid2 = (str) => {
   const stack = [];
   let ret = true;
   for (let i =0; i< str.length; i ++) { 
      if (['(','{','['].includes(str[i])) {
        stack.push(str[i]);
      } else if ([']','}',')'].includes(str[i])) {
        const cur = stack.pop();
        if ((str[i] === ']' && cur !=='[') || (str[i] === '}' && cur !=='{') || (str[i] === ')' && cur !=='(')) {
          ret = false;
          break;
        }
      }
   }
   return ret; 
}

// 优雅代码
const isValid3 = (str) => {
    const stack = [];
    const obj = {
        '{':'}',
        '(':')',
        '[':']'
    }
    for (let i = 0; i < str.length; i ++) {
      const ele = str[i];
      if (ele in obj) {
        stack.push(ele);
      } else {
        if (obj[stack.pop()] !== ele) {
          return false;
        }
      }
    }
    return !stack.length;
}


console.log(isValid3('()([{}()]){}{}'))