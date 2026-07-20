import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const Nav = useNavigate();

  const HandelLogin = () => {
    Nav("/myTeam");
  };

  return (
    <div className="Login">

      <div className="player_view">

        <div className="player_ring">
          <img src="/loginPics/soccer-player.png" alt="player" />
        </div>

      </div>

      <div className="player_bottom">

        <div className="Title_Player">
          <h1>Sky Sports</h1>
        </div>

        <div className="Title_Player_content">
          <h2>Latest sports update & watch the best live</h2>
          <h2>Coverage of your favourite sports</h2>
        </div>

        <div className="button__containers">

          <div className="player_btn" onClick={HandelLogin}>
            <img src="./walpaperAuth/user.svg" alt="" />
            <h1 onClick={()=>HandelLogin()}>User</h1>
          </div>

          <div className="creator_btn">
            <img src="./walpaperAuth/creator.svg" alt="" />
            <h1>Creator</h1>
          </div>
          

        </div>

      <div className="creat__account">Don't have an account ?</div>
      </div>


    </div>
  );
};

export default Login;