import React, { Component, useState } from 'react'
import './Style/UserChannel.css'
import { Link } from 'react-router-dom'


import Searching from './Searching'
import Home from './ChannelOwner/Homes'
import Videos from './ChannelOwner/Videos'
import PlayLists from './ChannelOwner/PlayLists'

// importing Images
import img from './Images/rengoku.jpg'
import rengoku_basic from './Images/rengoku_basic.jpg'

// Importing Icons
import verify from './Icons/verify.png'
import search from './Icons/transparency.png'


function UserChannel() 
{
  const [activeComponent , setactiveComponent] = useState(<Home/>);
  const [ChannelNav , setChannelNav]  =useState(true);

  const handleNavigation = (Component)=>{
    setactiveComponent(<Component/>)
  }

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
          <h2 onClick={() => handleNavigation(Home)}>Home</h2>
          <h2 onClick={() => handleNavigation(Videos)}>Videos</h2>
          <h2 onClick={() => handleNavigation(PlayLists)}>PlayLists</h2>
          <img src={search} alt="search icon" className='channel-search' />
          <form action="" className='channel-search-form'>
            <input type="search" name="" id="search-form"  />
          </form>
        </div>

        <br />

        <div className="channel-video">
          {activeComponent}
        </div>

        </div>
    </div>
  )
}

export default UserChannel