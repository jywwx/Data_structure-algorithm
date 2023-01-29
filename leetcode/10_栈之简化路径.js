// 题目描述 简化文件路径
// 时间复杂度为O(n);
/**
 *
 * @param {*} path
 */
const samplifyPath = (path) => {
  // path = '/a/./b/../../c/';
  const stack = [];
  const paths = path.split("/");
  for (let i = 0; i < paths.length; i++) {
    if (psths[i] === "..") {
      stack.pop();
    } else if (paths[i] && paths[i] !== ".") {
      stack.push(paths[i]);
    }
  }
  return `/${stack.join("/")}`;
};

console.log(samplifyPath("/a/./b/../../c/"), "??");
