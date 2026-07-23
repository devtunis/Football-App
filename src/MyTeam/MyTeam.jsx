import React, { useState } from 'react'
import "./MyTeam.css"
import { useNavigate } from 'react-router-dom'
import Card from '../Component/Card'
import { Plus, X } from 'lucide-react'

const MyTeam = () => {
    
    const Nav = useNavigate()
      
    const HandelReturn = () =>{
        Nav("/login")
    }
 
    const [off,SetOff] = useState(true)

  return (
    <div className='myTeam'>

      <div className="navbar-header">

        
        <div className="nav-option">
            <div className="first-nav-option">
                <img src="./myTeamIcon/arrow.svg" alt="" onClick={()=>HandelReturn()} />
                <h1>My Team</h1>
            </div>
            <div className="seconde-nav-option">
                 <img src="./myTeamIcon/search.svg" alt="" />
                 <img src="./myTeamIcon/Option.svg" alt="" />
            </div>
        </div>


      

      </div>


        <div className="Session-groups">
           
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
       
         
        </div>


  <div className="add__session bounce" onClick={()=>SetOff((prev)=>!prev)}> 
   
    {off ?   <Plus size={25}/>  :  <X size={25}/>}
  </div>

<div className="ContainerSessionadding" style={{ zIndex:off&& -1}}>


  <div 
  onClick={()=>Nav("/JoinSession")}
  
  className={`create_session_card bounce ${off&& 'off'} `}>
    <h1>Join Session</h1>
    <div className='avatar_create__session_card'>
      <img src='/navbaricon/Koura.png'/>
    </div>
  </div>
  
  
    <div 
    onClick={()=>Nav("/CreateSession")}
    
    className={`create_session_card2 bounce ${off && 'off'}`}>
    <h1>Create Session</h1>
    <div className='avatar_create__session_card2'>
      <img src='\myTeamIcon/plus.svg'/>
    </div>
  </div>
  



</div>



    </div>
  )
}

export default MyTeam