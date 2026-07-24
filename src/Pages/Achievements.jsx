import React from 'react'
import "./Achievements.css"
import { NavLink, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Achievements = () => {
    const Nav = useNavigate()
    const HandelReturnProfile = ()=>{
        Nav("/home/profile")
    }
  return (

    <> 
    
    
    
    
  
    <div className='Achievements'>
        <div className="navbarAchievements">
              <img src='/myTeamIcon/arrow.svg' onClick={()=>HandelReturnProfile()}/>
              <h1>Achievements</h1>
        </div>

        <div className="icon_choise_all__button">
                      <NavLink   to="Unlocked" className={({ isActive }) =>   isActive  ? "onLink" : "red"  }><h1>Unlocked</h1></NavLink>
                          <NavLink   to="all" className={({ isActive }) =>   isActive ?  "onLink" :"red"  }><h1>All</h1></NavLink>
  
           
        
        </div>
        <Outlet/>

    
    </div>



      </>



  )
}

export default Achievements