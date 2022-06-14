import React from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {MdCancel} from 'react-icons/md';
import '../styles/Task.scss';
import { deleteTask } from '../redux/actions/todoActions';
import { useSelector, useDispatch } from 'react-redux';
import { statusToogle } from '../redux/actions/todoActions';

const Task = ({task, selectTask}) => {
  const tasks = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div  className={`task ${task.status && 'active'}`}
          data-id = {task.id}>
        <p onClick={e=>{dispatch(statusToogle(tasks, e))}} >{task.name}</p>
        <div className="task__buttons">
            <AiOutlineInfoCircle onClick={(e) => {selectTask(e, tasks)}} />
            <MdCancel onClick={e=>{dispatch(deleteTask(tasks, e))}}/>
        </div>
    </div>
  )
}

export default Task