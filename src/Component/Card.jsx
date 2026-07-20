import React from 'react'
import "./Card.css"
import { useNavigate } from 'react-router-dom'
const Card = () => {
  const Nav = useNavigate()
  
  const HandelJoin = ()=>{
    Nav("/home")
  }
  return (
    <div className='Card'>
        
        <div className="left-avtar"><img src='./ff.png'  alt=''/></div>
        <div className="middleAvatr">
          <h1>Power Team </h1>
          <span>Legend Team</span>
        </div>
        <div className="right-side">
          <button onClick={()=>HandelJoin()}>Join</button>
          <button>Remove</button>
        </div>

    </div>
  )
}

export default Card