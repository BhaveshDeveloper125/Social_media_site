import React, { Component, useState } from 'react'
import './Style/UserChannel.css'
import { Link } from 'react-router-dom'

// Importing the Components
import Searching from './Searching'
import Home from './ChannelOwner/Homes'
import Videos from './ChannelOwner/Videos'
import PlayLists from './ChannelOwner/PlayLists'
import Shorts from './ChannelOwner/Shorts'

// importing Images
import img from './Images/rengoku.jpg'
import rengoku_basic from './Images/rengoku_basic.jpg'

// Importing Icons
import verify from './Icons/verify.png'
import search from './Icons/transparency.png'
import subscribers from './Icons/subscribe.png'
import play from './Icons/play.png'
import growth from './Icons/career.png'
import information from './Icons/information.png'
import cancel from './Icons/close.png'


function UserChannel() 
{
  const [activeComponent , setactiveComponent] = useState(<Home/>);
  const [modal , setmodal] = useState(false);
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
              <span id='channel-description'>Channel Description</span> <span className='more' onClick={()=> setmodal(!modal)}> ...more </span>
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
          <h2 onClick={() => handleNavigation(Shorts)}>Shorts</h2>
          <img src={search} alt="search icon" className='channel-search' />
          <form action="" className='channel-search-form'>
            <input type="search" name="" id="search-form"  />
          </form>
        </div>

        <br />

        <div className="channel-video">
          {activeComponent}
        </div>

        <div className={modal ? 'modal-show' : 'modal-hide'}>

          <div className="cross" onClick={()=> setmodal(!modal)} > <img src={cancel} id='cancel' /> </div>

          <h2 className='about-modal'> About </h2>
          <div className="description-modal"> <h4>Channel Description</h4> </div>

          <h2 className="links">Links</h2>
          <div className="link-modal"> <a href="#"> Link </a> </div>

          <ul>
            <li>
              <h2 className="channel-details"> Channel Details </h2>
            </li>

            <li>
              <img src={subscribers} id='subs' /> &nbsp;&nbsp;
              <span>2000000</span>
            </li>

            <br />

            <li>
              <img src={play} id='play' /> &nbsp;&nbsp;
              <span> 25 videos </span>
            </li>

            <br />

            <li>
              <img src={growth} id='growth' /> &nbsp;&nbsp;
              <span> 1000000 Views </span>
            </li>

            <br />

            <li>
              <img src={information} id='info' /> &nbsp;&nbsp;
              <span> Joined 3 Feb 2021 </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default UserChannel