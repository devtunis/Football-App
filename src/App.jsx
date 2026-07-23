import React from 'react'
import {  Route as Path , Routes  as Routers } from 'react-router-dom'
import Login from './Auth/Login'
import MyTeam from './MyTeam/MyTeam'
 
import OtherThing from './Pages/Matchs'
import Scores from './Pages/Scores'
import Matchs from './Pages/Matchs'
import HomeScore from './HomeScore/HomeScore'
import News from './SocialMedia/News'
import Profile from './Pages/Profile'
import CreateAccount from './Auth/CreateAccount'
import JoinSession from './Pages/JoinSession'
import CreateSession from './Pages/CreateSession'
import LoginYourAccount from './Auth/LoginYourAccount'
 

const App = () => {
  return (
     <> 
     
     <Routers>
      <Path    path={'/login'} element={<Login/>}/>
      <Path    path={'/myTeam'} element={<MyTeam/>}/>

      <Path    path={'/CreateAccount'} element={<CreateAccount/>}/>
      
      <Path    path={'/JoinSession'} element={<JoinSession/>}/>
      <Path    path={'/CreateSession'} element={<CreateSession/>}/>
      <Path    path={'/LoginAccount'} element={<LoginYourAccount/>}/>


      <Path    path={'/Home'} element={<HomeScore/>}>
      
      
        <Path  path="Scores" element={<Scores />} />
        <Path path="matches" element={<Matchs />} />
        <Path path="news" element={<News />} />
        <Path path="profile" element={<Profile />} />
      </Path>

     </Routers>
     </>
  )
}

export default App