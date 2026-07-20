import React from 'react'
import "./Badge.css"
const Badge = ({title ,img}) => {
  return (
    <div className='badge'>
        <img src={img}/>
        <h2>{title}</h2>
    </div>
  )
}

export default Badge