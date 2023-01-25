/**
 * 异步任务并发数量控制
 *
 * 支持promise 回调
 */

function limit(maxCount) {
  const queue = [];
  let activeCount = 0;

  const next = () => {
    activeCount--;
    queue.length > 0 && queue.shift()();
  };

  const push = (fn, resolve, args) => {
    queue.push(run.bind(null, fn, resolve, args));
    if (maxCount > activeCount && queue.length > 0) {
      queue.shift()();
    }
  };

  const run = (fn, resolve, args) => {
    activeCount++;
    const result = await(async () => fn(args))();
    resolve(result);
    next();
  };

  const runner = (fn, ...args) =>
    new Promise((resolve) => push(fn, resolve, args));

  return runner;
}

//异步辅助函数
async function sleep(n, name) {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ n, name });
    }, n * 1000);
  });
}

function start() {
  const runner = limit(3);
  const tasks = [
    () => sleep(1, "吃饭"),
    () => sleep(3, "睡觉"),
    () => sleep(3.5, "打游戏"),
    () => sleep(4, "学习算法"),
    () => sleep(5, "学习Vue和React"),
  ].map(runner);

  const result = Promise.all(tasks);
  console.log(result, "批量执行最后结果");
}

start();
