import React, { useState } from 'react'
import './Style/Style.css'
// importing Images
import home from './Icons/home.jpg'
import shorts from './Icons/shorts.png'
import subscription from './Icons/subscription.png'
import you from './Icons/you.png'
// Importing components
import Video from './Video'
// Importing the Videos
import one from './Videos/1.mp4'
import two from './Videos/2.mp4'
import three from './Videos/3.mp4'
import four from './Videos/4.mp4'
import five from './Videos/5.mp4'
import six from './Videos/6.mp4'
import seven from './Videos/7.mp4'
// importing the thumbnails
import akatsuki from './Images/akatsuki.jpg'
import cute from './Images/cute.jpg'
import itachi from './Images/itachi.jpg'
import rengoku from './Images/rengoku.jpg'
import rengoku_basic from './Images/rengoku_basic.jpg'
import madara from './Images/madara.jpg'
import naruto from './Images/naruto.jpg'


function Home() {
     const [nav , setnav]=useState(true);
     function handleClick() {
          setnav(!nav);
     }
  return (
    <>
                                                                           {/* Conding for menu starts */}
          <div className="menu" onClick={handleClick}>
               <div className='lines'></div>
               <div className='lines'></div>
               <div className='lines'></div>
          </div>
          <br /><br />
     <div className={nav ? 'show_menu' : 'hide_menu' }>
          <div className="main-menu">
               <div className="menu-list">
                    <img src={home} className='icons' alt="" />
                    <span> Home </span>
               </div>
               <div className="menu-list">
                    <img src={shorts} className='icons' alt="" />
                    <span> Shorts </span>
               </div>
               <div className="menu-list">
                    <img src={subscription} className='icons' alt="" />
                    <span> Subs </span>
               </div>
                    <div className="menu-list">
                    <img src={you} className='icons' alt="" />
               <span> You </span>
               </div>
          </div>
     </div>
                                                                                {/* Conding for menu ends */}


                                                                                {/* Conding for Main Content Page starts */}


     <div className="content-container">
          <Video src={one} poster={akatsuki} />
          <Video src={two} poster={cute} />
          <Video src={three} poster={itachi} />
          <Video src={four} poster={rengoku} />
          <Video src={five} poster={rengoku_basic} />
          <Video src={six} poster={madara} />
          <Video src={seven} poster={naruto} />
          <Video src={seven} poster={naruto} />
          {/* <Video /> */}
     </div>


                                                                                {/* Conding for Main Content Page starts */}

    </>
  )
}
export default Home
