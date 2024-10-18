import React from 'react'
import '../Style/UserChannel.css'

// Importing the Components
import Video from '../Video'

// Importing the Icons
import arrow from '../Icons/right-arrow.png'
import shorts from '../Icons/video.png'

// Importing the Videos
import one from '../Videos/1.mp4'
import two from '../Videos/2.mp4'
import three from '../Videos/3.mp4'
import four from '../Videos/4.mp4'
import five from '../Videos/5.mp4'
import six from '../Videos/6.mp4'
import seven from '../Videos/7.mp4'

// importing the thumbnails
import akatsuki from '../Images/akatsuki.jpg'
import cute from '../Images/cute.jpg'
import itachi from '../Images/itachi.jpg'
import rengoku from '../Images/rengoku.jpg'
import rengoku_basic from '../Images/rengoku_basic.jpg'
import madara from '../Images/madara.jpg'
import naruto from '../Images/naruto.jpg'

function Homes() {
  return (
    <div>
      <h1 className='for-you'>
        For You
      </h1>

      
      <div className="for-you-section">
        <Video  src={one} CIcon={akatsuki} poster={akatsuki} />
        <Video  src={two} CIcon={cute} poster={cute} />
        <Video  src={three} CIcon={itachi} poster={itachi} />
        <Video  src={four} CIcon={rengoku} poster={rengoku} />
        <Video  src={five} CIcon={rengoku_basic} poster={rengoku_basic} />
        <Video  src={six} CIcon={madara} poster={madara} />
        <Video  src={seven} CIcon={naruto} poster={naruto} />
      </div>

      <button className='back'> 
        <img src={arrow} alt="" id='left' />  
      </button>
      <button className='next'> 
        <img src={arrow} alt="" id='right' />  
      </button>

      <br /><br />

      <hr className='after-for-you' />


      <div className="shorts-title">
        <img src={shorts} alt="shorts" id='shorts' />
        <h3>Shorts</h3>
      </div>


      <div className="shorts-container">

      </div>


      <br /><br />

      <hr className='after-for-you' />


      <div className="my-videos">
        <div className="my-videos-title">
          <h2> Videos </h2>
        </div>

        <div className="my-video-container">
          <Video  src={one} CIcon={akatsuki} poster={akatsuki} />
          <Video  src={two} CIcon={cute} poster={cute} />
          <Video  src={three} CIcon={itachi} poster={itachi} />
          <Video  src={four} CIcon={rengoku} poster={rengoku} />
          <Video  src={five} CIcon={rengoku_basic} poster={rengoku_basic} />
          <Video  src={six} CIcon={madara} poster={madara} />
          <Video  src={seven} CIcon={naruto} poster={naruto} />
        </div>

        <button id='back'> 
          <img src={arrow} id='back-arrow' />
        </button>
        <button id='next'> 
          <img src={arrow} id='next-arrow' />
        </button>
      </div>

      <br /><br />

      <hr className='after-for-you' />

      <br />

      <div className="popular-container">
        <div className="popular-title">
          <h2>
            Popular Videos
          </h2>
        </div>

        <div className="popular-videos">
          <Video  src={one} CIcon={akatsuki} poster={akatsuki} />
          <Video  src={two} CIcon={cute} poster={cute} />
          <Video  src={three} CIcon={itachi} poster={itachi} />
          <Video  src={four} CIcon={rengoku} poster={rengoku} />
          <Video  src={five} CIcon={rengoku_basic} poster={rengoku_basic} />
          <Video  src={six} CIcon={madara} poster={madara} />
          <Video  src={seven} CIcon={naruto} poster={naruto} />
        </div>
        <br /><br />
      </div>

      <button id='p'> 
        <img src={arrow} id='p-arrow' />
      </button>
      <button id='n'> 
        <img src={arrow} id='n-arrow' />
      </button>
    </div>
  )
}

export default Homes