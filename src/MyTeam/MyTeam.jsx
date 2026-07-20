import React from 'react'
import "./MyTeam.css"
import { useNavigate } from 'react-router-dom'
import Card from '../Component/Card'

const MyTeam = () => {
    
    const Nav = useNavigate()
      
    const HandelReturn = () =>{
        Nav("/login")
    }


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








    </div>
  )
}

export default MyTeam