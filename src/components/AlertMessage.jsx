import React, {useState} from 'react'
import {IoAlertCircleSharp} from 'react-icons/io5';
import {IoCloseSharp} from 'react-icons/io5';
import '../styles/AlertMessage.scss'

const AlertMessage = ({alertRef, progresRef}) => {

  const [barWitdh, setBarWidth] = useState(100)
  

  return (
    <div className={`alert-message `} ref={alertRef}>
        <div className="alert-icon-container"><IoAlertCircleSharp /></div>
        <p>You can not input empty string, Please fill the blank</p>     
        <div className="alert-close-container" onClick={()=>alertRef.current.classList.remove('show')}><IoCloseSharp/></div> 
        <div className="progres-bar" ref={progresRef}></div>
    </div>
  )
}

export default AlertMessage