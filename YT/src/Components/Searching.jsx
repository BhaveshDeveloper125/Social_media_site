import React, { useState } from 'react'
import './Style/Searching.css'
import { Link } from 'react-router-dom'


// importing Icons
import youtube from './Icons/Logo_of_YouTube.svg.png'
import search from './Icons/search.png'
import upload from './Icons/upload.png'
import notification from './Icons/notification.png'
import profile from './Icons/profile.png'
import History from './Icons/history.png'
import playlist from './Icons/play.png'
import you from './Icons/you.png'
import home from './Icons/home.png'
import shorts from './Icons/shorts.png'
import subscription from './Icons/subscription.png'

// importing Images
import rengoku_basic from './Images/rengoku_basic.jpg'

function Searching() 
{
     const [show , setshow] = useState(false);    
     function handleClick() 
     {
          setshow(!show);
          console.log(show);
     }
  return (
    <div>
     <br />
     
     <div className="top-line">
          <div className="three-line-menu" onClick={handleClick}>
               <div className="three-lines"></div>
               <div className="three-lines"></div>
               <div className="three-lines"></div>
          </div>

          <img src={youtube} alt="logo" className='yt_logo'  />

          <form action="" method="post" id='search_form'>
               <input type="search" name="" id="search_box" placeholder='Seach' required/>
               <button id='submit-button' type="submit">
                    {/* Search */}
                    <img src={search} alt="search" className='submit-form-logo'/>
               </button>
          </form>

          <div className="user-details">
               <div className="other-details" >
                    <img src={upload} alt="upload" id='upload' />
               </div>
               <div className="other-details">
                    <img src={notification} id='notify' alt="notification" />
               </div>
               <div className="other-details">
                    <img src={profile} id='prof' alt="" />
               </div>
          </div>
     </div>

     <div className={ show ? 'showing' : 'hide'}>
               <ul className='menu-view'>
                    <div className="li-tag">
                         <li className='li-tag'>
                              <Link to='/'>
                                   <img src={home} id='homeIcon' alt="home icon" />
                                   <h3  className='menu-title'>Home</h3>
                              </Link>
                         </li>
                    </div>
                    <br />
                    <div className="li-tag">
                         <li className='li-tag'>
                              <img src={shorts} id='shortsIcon' alt="shorts icon" />
                              <h3  className='menu-title'>Shorts</h3>
                         </li>
                    </div>
                    <br />
                    <div className="li-tag">
                         <li className='li-tag'>
                              <Link to='/subscription'>
                                   <img src={subscription} id='subscriptionIcon' alt="Subscription" />
                                   <h3  className='menu-title'>Subscription</h3>
                              </Link>
                         </li>
                    </div>
                    <br />
                    <hr />
                    <div className="li-tag">
                         <li className='li-tag'>
                              <Link to='/you'>
                                   <img src={you} id='youIcon' alt="You" />
                                   <h3  className='menu-title'>You</h3>
                              </Link>
                         </li>
                    </div>
                    <br />
                    <div className="li-tag">
                         <li className='li-tag'>
                              <Link to='/history'>
                                   <img src={History} id='history' alt="history icon" />
                                   <h3  className='menu-title'>History</h3>
                              </Link>
                         </li>
                    </div>
                    <br />
                    <div className="li-tag">
                         <li className='li-tag'>
                              <Link to='/playlist'>
                                   <img src={playlist} id='history' alt="history icon" />
                                   <h3  className='menu-title'>Playlist</h3>
                              </Link>
                         </li>
                    </div>
                    <br />

                    <hr />
                    <h2> Subscribed </h2>    

                    <div className="li-tag">
                         <li className='li-tag'>
                              <Link to='/userchannel'>
                                   <img src={rengoku_basic} id='channel-owner-icon' alt="history icon" />
                                   <h3  className='menu-title'>The Valley of Music</h3>
                              </Link>
                         </li>
                    </div>
               </ul>
     </div>
    </div>
  )
}

export default Searching