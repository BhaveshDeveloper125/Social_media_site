import React, { useState } from 'react'
import './Style/Style.css'

// Importing components
import Video from './Video'
import Searching from './Searching'

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
     const [nav , setnav]=useState(false);
     function handleClick() 
     {
          setnav(!nav);
     }
  return (
    <>
          <div className="container">
               <Searching />

                    <br /><br />
                    
                                                                                {/* Conding for Main Content Page starts */}
               <div className="content-container">
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
                                                                                {/* Conding for Main Content Page starts */}
          </div>
    </>
  )
}
export default Home
