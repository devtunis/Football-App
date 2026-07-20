import React from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const Nav = useNavigate()
  
  const HandelLogin = () =>{
    Nav("/myTeam")
  }
  return (
    <div className='Login'>


        

        <div className="header">
           
            <div className="content-logo">
               <img src="./walpaperAuth/logo.png" alt="" />
            </div>
            <div className="header-content">
                <h1>VIEW </h1>
                <h1>TEAMS</h1>
            </div>
            <div className="descontent">
                <span>BUILD . MANAGE. DOMINATE</span>
            </div>
        </div>



        <div className="options">



        <div className="containerButton">

                    <div className="player-button scaale" onClick={()=>HandelLogin()}>
                        <img src="./walpaperAuth/user.svg" alt="" />
                        <h1>PLAYER</h1>
                        
                    </div>



                    <div className="player-button-creator scaale">
                        <img src="./walpaperAuth/creator.svg" alt="" />
                        <h1>CREATOR</h1>
                        
                    </div>

               

        </div>



         <p className='forget'>Don't have an account ?  
         <span className='forgetSpan'> Sign up</span>
         </p>
 



        </div>





    </div>
  )
}

export default Login