import React from 'react'
import '../Style/UserChannel.css'


// Importing the Components
import Video from '../Video'

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

function Videos() 
{
  return (
     <>
     <div className="sorting">
       <div className='latest'> Latest </div>
       <div className='popular'> Popular </div>
       <div className='oldest'> Oldest </div>
     </div>

     <br /><br />

   <div className='channel-home'>

    <Video  src={one} CIcon={akatsuki} poster={akatsuki} />
    <Video  src={two} CIcon={cute} poster={cute} />
    <Video  src={three} CIcon={itachi} poster={itachi} />
    <Video  src={four} CIcon={rengoku} poster={rengoku} />
    <Video  src={five} CIcon={rengoku_basic} poster={rengoku_basic} />
    <Video  src={six} CIcon={madara} poster={madara} />
    <Video  src={seven} CIcon={naruto} poster={naruto} />
    <Video  src={seven} CIcon={naruto} poster={naruto} />
    <Video  src={one} CIcon={akatsuki} poster={akatsuki} />
    <Video  src={two} CIcon={cute} poster={cute} />
    <Video  src={three} CIcon={itachi} poster={itachi} />
    <Video  src={four} CIcon={rengoku} poster={rengoku} />
    <Video  src={five} CIcon={rengoku_basic} poster={rengoku_basic} />
    <Video  src={six} CIcon={madara} poster={madara} />
    <Video  src={seven} CIcon={naruto} poster={naruto} />
    <Video  src={seven} CIcon={naruto} poster={naruto} />

   </div>
   </>
  )
}

export default Videos

