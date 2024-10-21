import React, { useState } from 'react'
import '../Components/Style/Player.css'

// Importing Components
import Searching from './Searching'
import Video from './Video'

// Importing Icons
import dislike from '../Components/Icons/dislike.png'
import like from '../Components/Icons/love.png'

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


function Player() 
{
     const [expandDescription , setDescription] = useState(false);
  return (
    <div>
     <Searching />
     
     <div className="video-player-container">
          <div className="video-container-viewer">
               <Video src={one} CIcon={rengoku} poster={rengoku} />
          </div>
          
          <br /><br />

          <div className="spliter">

               <div className="spliter1">

                    <div className="video-title-on-player">
                         <h1> This is the Video Title </h1>
                    </div>

                    <div className="channel-activity">
                         <img src={rengoku} id='player-logo' />

                         <div className="player-video-detail-container">
                              <h3 id='player-channel-name' > The Valley of Music </h3>
                              <h4 id='Player-channel-subs'> 1M subs </h4>
                         </div>

                         <div className="player-sub-button-container">
                              <button>
                                   {/* <img src={bell} id='bell' /> */}
                                   <strong> subscribed </strong>
                              </button>
                         </div>

                         <div className="player-like-share">
                              <button> 
                                   <img src={like} id='like' />
                              </button>
                              <button> 
                                   <img src={dislike} id='dislike' />
                              </button>
                              <button> share </button>
                         </div>
                    </div>

                    <div className={expandDescription ? 'user-video-description-expand' : 'user-video-description-contract'}>
                         <div className="view-time">
                              <span> <strong> 1M views </strong> </span>
                              <span> <strong> 6 months ago </strong> </span>

                              <br /><br />

                              <span> This is channel description... </span> <span id='more' onClick={()=> setDescription(!expandDescription)} > more/less </span> 
                         </div>
                         <br />
                         <br />
                         <br />
                         <br />
                         <br />
                    </div>

                    <div className="comments-container">
                         <h2> 100 Comments </h2>
                         
                         {/* <select name="" id="">
                              <option value=""></option>
                              <option value="TopComments">Top Comments</option>
                              <option value="NewestFirst">Newest First</option>
                         </select> */}

                         <div className="add-comment-form">
                              <form action="" method="post">
                                   <input type="text" name="" placeholder='Comment' id="comment-field" required /> <br /> <br /> <br /><br />
                                   <input type="submit" value="Comment" id='comment' />
                                   <input type="reset" value="Cancel" id='cancel' />
                              </form>
                         </div>
                    </div>
               </div>

               <div className="spliter2">
                    <h1> Suggetions </h1>
                    <Video  src={one} CIcon={akatsuki} poster={akatsuki} />
                    <Video  src={two} CIcon={cute} poster={cute} />
                    <Video  src={three} CIcon={itachi} poster={itachi} />
                    <Video  src={four} CIcon={rengoku} poster={rengoku} />
                    <Video  src={five} CIcon={rengoku_basic} poster={rengoku_basic} />
                    <Video  src={six} CIcon={madara} poster={madara} />
                    <Video  src={seven} CIcon={naruto} poster={naruto} />
               </div>
          </div>

     </div>
     


    </div>
  )
}

export default Player

