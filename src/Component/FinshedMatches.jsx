import React from 'react'
import "./FinshedMatches.css"
const FinshedMatches = () => {
  return (
    <div className='FinshedMatchesS'>

        <div className="top">
            <div className="left">
                <div className="avtarVlag">
                    <img src='/TeamIcon/barcelona.png'/>
                </div>
                <h1>barcelona</h1>
            </div>
            
            <div className="middle-score"><h1>3-2</h1></div>
            <div className="right">

                  <div className="avtarVlag">
                    <img src='/TeamIcon/real_madrid.png'/>
                </div>
               <h1>Reall </h1>


            </div>
        </div>

        <div className="down">
            <h1>Yestarday</h1>
        </div>
    </div>
  )
}

export default FinshedMatches