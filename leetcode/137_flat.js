/**
 * 手写flat
 */
const data = [1,2, [3,4],[5,[6,7]], [8,[9]]]

const flat = (arr, n) => {
   let curInd = 0;
   const rst = [];
   const dfs = (arr) => {
     if (curInd > n) {
        rst.push(arr);
        return;
     }
     for (let i = 0; i < arr.length; i ++) {
        if (typeof arr[i] !== 'number') {
           curInd++;
           dfs(arr[i]);
           curInd--;
        } else {
            rst.push(arr[i])
        }
     }
   }
   dfs(arr, n - 1);
   return rst;
}
console.log(flat(data, 3))