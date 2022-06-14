import React from 'react'
import '../styles/Info.scss'

const Info = ({task, setIsOpened}) => {
  return (
    <div>
        <button className="back" onClick={() => {setIsOpened(prev => !prev)}} >Back</button>
        <div className="info-context">
            <h1>{task.name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, 
                eveniet pariatur hic modi quod sequi.</p>
        </div>
    </div>
  )
}

export default Info