/**
 * 给你一个用字符串数组tasks 表示的CPU需要执行的任务列表。其中每个字母表示一种不同种类的任务。任务可以以仁义顺序执行，并且每个任务都可以在一个单位
 * 时间内执行完。在任何一个单位时间，CPU可以完成一个任务，或者处于待命状态。
 * 
 * 然而，两个相同种类的任务之间必须有长度为整数n的冷却时间，因此 至少有连续n个单位时间内CPU 在执行不同的任务，或者在待命状态。
 * 你需要计算完成所有任务所需要的最短时间。
 */

var lastInterval = function (tasks,n) {
    const arr = new Array(26).fill(0);
    for (let t of tasks) {
       arr[t.charCodeAt() - 'A'.charCodeAt()]++;
    }
    const max = Math.max(...arr);
    let ret = (max - 1) * (n + 1);

    for (let i = 0; i < 26; i ++) {
       if (arr[i] === max) {
          ret ++;
       }
    }
    console.log(ret)
    return Math.max(ret,tasks.length);
}
console.log(lastInterval(['A','A','A','B','B','B'],0))