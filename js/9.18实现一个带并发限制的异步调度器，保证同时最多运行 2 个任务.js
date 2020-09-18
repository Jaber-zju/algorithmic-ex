// 实现一个带并发限制的异步调度器，保证同时最多运行 2 个任务

class Scheduler {
  constructor() {
    this.pendingTask = []   // 待执行的任务
    this.runningTask = []   // 正在执行的任务
  }

  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      promiseCreator.resolve = resolve
      if (this.runningTask.length < 2) {
        this.usingRun(promiseCreator)
      } else {
        this.pendingTask.push(promiseCreator)
      }
    })
  }

  usingRun(promiseCreator) {
    this.runningTask.push(promiseCreator)
    promiseCreator().then(() => {
      promiseCreator.resolve()
      this.usingMove(promiseCreator)
      if (this.pendingTask.length > 0) {
        this.usingRun(this.pendingTask.shift())
      }
    })
  }

  usingMove(promiseCreator) {
    let index = this.runningTask.findIndex(promiseCreator)
    this.runningTask.splice(index, 1)
  }
}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})
const scheduler = new Scheduler()
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(400, 4)
addTask(200, 2)
addTask(300, 3)
addTask(100, 1)

// 2 4 1 3
