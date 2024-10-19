import React from 'react'
import './Style/Subscription.css'

// Importing Compoenents
import Searching from '../Components/Searching.jsx'
import Video from './Video.jsx'

// Importing Icons
import shorts from './Icons/shorts.png'

// Importing Videos
import one from '../Components/Videos/1.mp4'
import two from '../Components/Videos/2.mp4'
import three from '../Components/Videos/3.mp4'
import four from '../Components/Videos/4.mp4'
import five from '../Components/Videos/5.mp4'
import six from '../Components/Videos/6.mp4'
import seven from '../Components/Videos/7.mp4'

// importing the thumbnails
import akatsuki from '../Components/Images/akatsuki.jpg'
import cute from '../Components/Images/cute.jpg'
import itachi from '../Components/Images/itachi.jpg'
import rengoku from '../Components/Images/rengoku.jpg'
import rengoku_basic from '../Components/Images/rengoku_basic.jpg'
import madara from '../Components/Images/madara.jpg'
import naruto from '../Components/Images/naruto.jpg'


function Subscription() 
{
  return (
    <div>
     <Searching />

     <div className="subscription-video-container">
          <Video  src={one} CIcon={akatsuki} poster={akatsuki} />
          <Video  src={two} CIcon={cute} poster={cute} />
          <Video  src={three} CIcon={itachi} poster={itachi} />
          <Video  src={four} CIcon={rengoku} poster={rengoku} />
          <Video  src={five} CIcon={rengoku_basic} poster={rengoku_basic} />
          <Video  src={six} CIcon={madara} poster={madara} />
          <Video  src={seven} CIcon={naruto} poster={naruto} />
          <Video  src={two} CIcon={cute} poster={cute} />
     </div>

     <div className="shorts-seaction">
          <div className="short-title">
               <img src={shorts} id='subscription-shorts' /> &nbsp;&nbsp;
               <span> <h2> Shorts </h2> </span>
          </div>

          <div className="subscription-shorts-container">

          </div>

          <br /><br />
     </div>


     <br /><br />


     <div className="subscription-video-container2">
          <Video  src={one} CIcon={akatsuki} poster={akatsuki} />
          <Video  src={two} CIcon={cute} poster={cute} />
          <Video  src={three} CIcon={itachi} poster={itachi} />
          <Video  src={four} CIcon={rengoku} poster={rengoku} />
          <Video  src={five} CIcon={rengoku_basic} poster={rengoku_basic} />
          <Video  src={six} CIcon={madara} poster={madara} />
          <Video  src={seven} CIcon={naruto} poster={naruto} />
          <Video  src={two} CIcon={cute} poster={cute} />
     </div>


     <br /><br />
    </div>
  )
}

export default Subscription

