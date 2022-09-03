// 题目描述 简化文件路径
/**
 * 
 * @param {*} path 
 */
const samplifyPath = (path) => {
 // path = '/a/./b/../../c/';
  const stack = [];
  const paths = path.split('/');

  for (let i = 0; i < paths.length; i ++ ) {
    const p = paths[i];
    if (p === '..') {
        stack.pop();
    } else if (p && p !== '.') {
        stack.push(p);
    }
  }
  return `/${stack.join('/')}`;
}

console.log(samplifyPath('/a/./b/../../c/'),"??")