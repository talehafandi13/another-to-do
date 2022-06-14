// ADD A TASK
export default function add(state, obj){

    const newList = [...state, obj];
    console.log(state);
    console.log(newList);
    return {
        type: "ADD",
        payload: newList
    }
}

// DELETE A TASK
export function deleteTask(tasks, e) {
    let taskId = e.target.parentElement.parentElement.dataset.id || e.target.parentElement.parentElement.parentElement.dataset.id;
    const newArr = [];

    tasks.map((task) => {
        task.id !== taskId && newArr.push(task)
    });
    
    return{
        type: 'DELETE',
        payload: newArr
    }
}

// CHANGE STATUS OF A TASK

export function statusToogle(tasks, e) {
    let taskElement = e.target.parentElement;
    let taskId = taskElement.dataset.id;

    console.log(taskElement);

    tasks.forEach((task) => {
      if (taskId === task.id) {
        // if (!taskElement.classList.contains("task--done")) {
        //   taskElement.classList.add("task--done");
        //   task.status = "done";
        //   console.log(task);
        //   localStorage.setItem("List", JSON.stringify(tasks));
        // } else {
        //   taskElement.classList.remove("task--done");
        //   task.status = "pending";
        //   console.log(task);
        //   localStorage.setItem("List", JSON.stringify(tasks));
        // }
        task.status = !task.status;
        taskElement.classList.contains('active') ? taskElement.classList.remove('active') : taskElement.classList.add('active');
        localStorage.setItem("List", JSON.stringify(tasks));
      }
    });

    return{
        type: 'CHECK',
        payload: tasks
    }
    
}

// Info Toogle