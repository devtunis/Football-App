import React from 'react'
import "./HomeScore.css"
import { NavLink, Outlet } from 'react-router-dom'

const HomeScore = () => {
    const HandelVibrate = ()=>{
        navigator.vibrate(100)
    }
    return (

        <>



            <div className='switch-bar' >

                <div className="content-icon">
               
                   
                    <NavLink 
                    to="Scores"
                    className={({ isActive }) =>
                        isActive ? "active-link" : "normal-link"
                    }
                    
                    >
                     <img onClick={()=>HandelVibrate()} src='/pictuerSwitchBar/home.svg' />
                         
                     </NavLink>


                      <span   >Home</span>



                </div>


                <div className="content-icon">
                  



                     <NavLink 
                    to="news"
                    className={({ isActive }) =>
                        isActive ? "active-link" : "normal-link"
                    }
                    
                    >
                       <img  onClick={()=>HandelVibrate()} src='/pictuerSwitchBar/social.svg' />
                         
                     </NavLink>





                    <span>news</span>
                </div>











                <div className="content-icon">
                  
                 

                      <NavLink 
                        to="matches"
                        className={({ isActive }) =>
                            isActive ? "active-link" : "normal-link"
                        }
                    
                    >
                   <img onClick={()=>HandelVibrate()}  src='/pictuerSwitchBar/train.png' />

                
                         
                    </NavLink>
                     <span>matches</span>


                </div>

                <div className="content-icon">

                    
                      <NavLink 
                        to="profile"
                        className={({ isActive }) =>
                            isActive ? "active-link" : "normal-link"
                        }
                    
                    >
                    <img  onClick={()=>HandelVibrate()}  src='/pictuerSwitchBar/profile.svg' />
                
                         
                    </NavLink>




                  
                    <span>Profile</span>
                </div>
            </div>


            <Outlet />


        </>



    )
}

export default HomeScore