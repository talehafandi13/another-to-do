import React, {useState, useRef} from 'react';
import './App.scss';
import Input from './components/Input';
import Tasks from './components/Tasks';
import Info from './components/Info';
import { useSelector } from 'react-redux';
import AlertMessage from './components/AlertMessage';

function App() {
  // let isOpened = false;
  const [isOpened, setIsOpened] = useState(false);
  const [selectedTask, setSelectedTask] = useState({});
  const alertRef = useRef(null);
  const progresRef = useRef(null);


  const tasks = useSelector(state=>state);
  console.log(tasks[0]);

  function selectTask(e, tasks) {
    
    let taskId = e.target.parentElement.parentElement.dataset.id || e.target.parentElement.parentElement.parentElement.dataset.id;
    tasks.filter(task => {
      taskId === task.id && setSelectedTask(task);
    })
    
    setIsOpened(prev => !prev)
    e.stopPropagation();
    console.log(e.target, taskId);
  }

  return (
    <div className="App">
      <h1>To Do App</h1>
      {!isOpened && (<Input alertRef={alertRef} progresRef={progresRef}/>)}
      {!isOpened && (<Tasks selectTask={selectTask} />)}
      {isOpened && (<Info task={selectedTask} setIsOpened={setIsOpened}/>)}
      <AlertMessage alertRef={alertRef} progresRef={progresRef}/>
    </div>
  );
}

export default App;
