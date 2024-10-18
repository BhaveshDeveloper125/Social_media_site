import React, { useState } from 'react'
import './Style/Searching.css'
// importing Icons
import youtube from './Icons/Logo_of_YouTube.svg.png'
import search from './Icons/search.png'
import upload from './Icons/upload.png'
import notification from './Icons/notification.png'
import profile from './Icons/profile.png'

// importing Images
import home from './Icons/home.png'
import shorts from './Icons/shorts.png'
import subscription from './Icons/subscription.png'
import you from './Icons/you.png'


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
                              <img src={home} id='homeIcon' alt="home icon" />
                              <h3  className='menu-title'>Home</h3>
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
                              <img src={subscription} id='subscriptionIcon' alt="Subscription" />
                              <h3  className='menu-title'>Subscription</h3>
                         </li>
                    </div>
                    <br />
                    <hr />
                    <div className="li-tag">
                         <li className='li-tag'>
                              <img src={you} id='youIcon' alt="You" />
                              <h3  className='menu-title'>You</h3>
                         </li>
                    </div>
                    <br />
               </ul>
          </div>
    </div>
  )
}

export default Searching