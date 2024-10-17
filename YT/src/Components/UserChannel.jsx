import React from 'react'
import './Style/UserChannel.css'
import Searching from './Searching'

// importing Images
import img from './Images/rengoku.jpg'
import rengoku_basic from './Images/rengoku_basic.jpg'

// Importing Icons
import verify from './Icons/verify.png'


function UserChannel() 
{
  return (
    <div>
      <Searching />

      <div className="channel-owner">
        <img src={img} alt="dashboard image" id='dashBoard-img' />

        <div className="channel-owner-data">

          <div className="channel-logo-container">
            <img src={rengoku_basic} id='channel-logo' alt="channel-owner-logo" />
          </div>

          <ul className='other-data'>
            <li className='channel'>
              <h1 id='channel-name'>The Valley of Music</h1>
              <img src={verify} alt="tick mark" id='verify' />
            </li>
            <li className='channel' style={{height:'30px'}}>
              <h4 id='channel-stats'>@username . 2.00M subscribers . 100 Videos</h4>
            </li>
            <li className='channel' style={{height:'30px'}}>
              <span id='channel-description'>Channel Description</span> ...more
            </li>
            <li className='channel'>
              <button id='subscribe-button'> Subscribe </button>
              <button id='join'>Join</button>
            </li>
          </ul>
        </div>


        <div className="channel-menu">
          <a href="">Home</a>
          <a href="">Videos</a>
          <a href="">PlayLists</a>
        </div>
      </div>
    </div>
  )
}

export default UserChannel
