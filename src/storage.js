const localStorage = (() => {

    const saveLocal = () => {
        localStorage.setItem("task", JSON.stringify(myTasks.name))
    }

    const restoreLocal = () => {
        const tasks = JSON.parse(localStorage.getItem("task"))
        if (name) {
            myTasks.task = task.map((element) => JSONToTask(element))
        } else {
            myTasks.task = []
        }
    }

    const JSONToTask = (task) => {
        return new Task(task.name, task.date, task.priority)
      }
      
return {saveLocal}
})();

export default localStorage