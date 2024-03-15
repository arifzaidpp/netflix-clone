import React from 'react'
import "./Banner.css"

function Banner() {
  return (
    <div className='banner'>
        <div className="content">
           <h1 className="title">Movie Name</h1>
           <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">My list</button>
           </div>
           <h1 className="description">A group of eight thieves who take hostages and lock themselves in the Royal Mint of Spain to steal billions of euros and print them. </h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner