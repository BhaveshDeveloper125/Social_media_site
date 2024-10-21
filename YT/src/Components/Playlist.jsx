import React from 'react'
import './Style/Playlis.css'

// Import Components
import Searching from '../Components/Searching.jsx'
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

function Playlist() 
{
  return (
    <div>
      <Searching />

      <div className="user-play-list-container-box">
          <Video src={one} CIcon={akatsuki} poster={akatsuki}  isplaylist='true' />
          <Video src={two} CIcon={cute} poster={cute}  isplaylist='true' />
          <Video src={three} CIcon={itachi} poster={itachi}  isplaylist='true' />
          <Video src={four} CIcon={rengoku} poster={rengoku}  isplaylist='true' />
          <Video src={five} CIcon={rengoku_basic} poster={rengoku_basic}  isplaylist='true' />
          <Video src={six} CIcon={madara} poster={madara}  isplaylist='true' />
          <Video src={seven} CIcon={naruto} poster={naruto}  isplaylist='true' />
      </div>

      <div className="user-play-list-container-box">
          <Video src={one} CIcon={akatsuki} poster={akatsuki}  isplaylist='true' />
          <Video src={two} CIcon={cute} poster={cute}  isplaylist='true' />
          <Video src={three} CIcon={itachi} poster={itachi}  isplaylist='true' />
          <Video src={four} CIcon={rengoku} poster={rengoku}  isplaylist='true' />
          <Video src={five} CIcon={rengoku_basic} poster={rengoku_basic}  isplaylist='true' />
          <Video src={six} CIcon={madara} poster={madara}  isplaylist='true' />
          <Video src={seven} CIcon={naruto} poster={naruto}  isplaylist='true' />
      </div>

      
    </div>
  )
}

export default Playlist

