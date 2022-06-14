import React from 'react'
import Task from './Task';
import '../styles/Tasks.scss';
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, statusToogle } from "../redux/actions/todoActions";

const Tasks = ({selectTask}) => {
  const tasks = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(tasks);

  return (
    <div className="tasks">
      {
        tasks.map((task) => (
          <Task task={task} 
                key={task.id} 
                selectTask={selectTask} 
                />
        ))
      }
    </div>
  )
}

export default Tasks