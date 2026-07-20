import React from 'react'
import "./Profile.css"
import Badge from '../Component/Badge'
const Profile = () => {
  return (
    <div className='profile'>


        <div className="nav_bar_profile">
            <span className='pro'>Profile</span>
            <img src='/myTeamIcon/setting.svg'/>
        </div>

        <div className="Profile_pictuer_image_content">
            
            <div className="profile_left">
                <div className="Avart_profile">
                    <img src='/Memories/IMG_6190.jpg'/>
                    <small className='online_profile_user'></small>
                </div>
             
            </div>

            <div className="profile_right">
                
                <h1 className='nickName'>Ghaith</h1>
                <h1 className='idName'>@ghaith_7</h1>
                <div className='badgesContainer'>
                    <Badge/>
                      <Badge/>
                        <Badge/>
                          <Badge/>
                            <Badge/>
                            
                </div>
            </div>
        </div>



    </div>
  )
}

export default Profile