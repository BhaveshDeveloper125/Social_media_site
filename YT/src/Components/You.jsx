import React from 'react'
import './Style/You.css'

// Importing components
import Video from './Video'
import Searching from './Searching'

// Importing Icons
import arrow from '../Components/Icons/right-arrow.png'

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

// Importing Images

function You() 
{
  return (
    <div>
     <Searching />

     <div className="you-container">
          <br /><br /><br /><br /><br /><br />


     <div className="data-container">
          <img src={rengoku_basic} id='user-img' />
          <ul className="user-extra-details">
               <li> <h1> The Valley of Music </h1> </li>
               <li> <span className='user-details-in-span'> @username . view channel </span> </li>
          </ul>
     </div>

     <div className="you-history-title">
          <h1> History </h1>
          <button className='view-all'> View All </button>
     </div>

     <div className="user-history">
          <Video  src={one} CIcon={akatsuki} poster={akatsuki} />
          <Video  src={two} CIcon={cute} poster={cute} />
          <Video  src={three} CIcon={itachi} poster={itachi} />
          <Video  src={four} CIcon={rengoku} poster={rengoku} />
          <Video  src={five} CIcon={rengoku_basic} poster={rengoku_basic} />
          <Video  src={six} CIcon={madara} poster={madara} />
          <Video  src={seven} CIcon={naruto} poster={naruto} />
     </div>

     <button className='prev'>  
          <img src={arrow} id='prev-img' />
     </button>

     <button className='nex'>  
          <img src={arrow} id='nex-img' />
     </button>

     <div className="play-list-title">
          <h1>Playlist</h1>
          <button>View All</button>
     </div>

     <div className="play-lists">
          <Video  src={one} CIcon={akatsuki} poster={akatsuki} isplaylist='true' />
          <Video  src={two} CIcon={cute} poster={cute} isplaylist='true' />
          <Video  src={three} CIcon={itachi} poster={itachi} isplaylist='true' />
          <Video  src={four} CIcon={rengoku} poster={rengoku} isplaylist='true' />
          <Video  src={five} CIcon={rengoku_basic} poster={rengoku_basic} isplaylist='true' />
          <Video  src={six} CIcon={madara} poster={madara} isplaylist='true' />
          <Video  src={seven} CIcon={naruto} poster={naruto} isplaylist='true' />
     </div>

     <div className="watch-later-title">
          <h1> Watch Later </h1>
          <button>View All</button>
     </div>

     <br />

     <div className="watch-later">
          <Video  src={one} CIcon={akatsuki} poster={akatsuki} />
          <Video  src={two} CIcon={cute} poster={cute} />
          <Video  src={three} CIcon={itachi} poster={itachi} />
          <Video  src={four} CIcon={rengoku} poster={rengoku} />
          <Video  src={five} CIcon={rengoku_basic} poster={rengoku_basic} />
          <Video  src={six} CIcon={madara} poster={madara} />
          <Video  src={seven} CIcon={naruto} poster={naruto} />
     </div>

     <div className="liked-videos-title">
          <h1> Liked Videos </h1>
          <button>View All</button>
     </div>

     <br />

     <div className="liked-videos">
          <Video  src={one} CIcon={akatsuki} poster={akatsuki} />
          <Video  src={two} CIcon={cute} poster={cute} />
          <Video  src={three} CIcon={itachi} poster={itachi} />
          <Video  src={four} CIcon={rengoku} poster={rengoku} />
          <Video  src={five} CIcon={rengoku_basic} poster={rengoku_basic} />
          <Video  src={six} CIcon={madara} poster={madara} />
          <Video  src={seven} CIcon={naruto} poster={naruto} />
     </div>



     </div>

     <br /><br />
    </div>
  )
}

export default You