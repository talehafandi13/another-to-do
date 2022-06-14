import React, {useState, useEffect} from 'react'
import '../styles/Input.scss'
import { useSelector, useDispatch } from 'react-redux';
import validate from '../validation/validation.js'
import uuid from 'react-uuid'
import add from '../redux/actions/todoActions'


const Input = ({alertRef, progresRef}) => {

  const dispatch = useDispatch();
  const tasks = useSelector(state=>state);

  const [inputValue, setInputValue] = useState("");
    
  function onSubmit(e) {
    e.preventDefault();
        
    const obj={
      name: inputValue,
      id: uuid(),
      status: false //false means task is still pending
    }
  
    if(validate(inputValue)){
      dispatch(add(tasks, obj));
      alertRef.current.classList.contains('show') && alertRef.current.classList.remove('show');  
      // clearTimeout(alertTimer);
    }else {
      alertRef.current.classList.add('show')
      const alertInterval = setInterval(()=>{
        let style = getComputedStyle(progresRef.current)
        let w = parseInt(style.getPropertyValue('--progress'));
        progresRef.current.style.setProperty('--progress', (w-0.1))
        if(w === 0){
          clearInterval(alertInterval);
          alertRef.current.classList.remove('show');
        }
      }, 50)
      progresRef.current.style.setProperty('--progress', (100))
    }
    setInputValue("");
    
  }

  React.useEffect(() => {
      localStorage.setItem('List', JSON.stringify(tasks));
  }, [tasks]) 




  return (
    
    <form className="task__input-container" onSubmit={onSubmit}>
        <input  type="text" 
                name="task" 
                className="task__input" 
                value = {inputValue}
                onChange={(e)=>setInputValue(e.target.value)} />
        <button type="submit" 
                className="task__add"
                onClick = {onSubmit}>Add</button>
    </form>
  )
}

export default Input