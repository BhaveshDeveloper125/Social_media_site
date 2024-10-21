import React from 'react'
import './Style/Videos.css'


function Video(prop) 
{
  return (
    <div className='video-container'>
      <div className={prop.isplaylist == 'true' ? 'play-list-bg' : 'play-list-bg-display-none'}> <img src={prop.poster} id='play-list-img' /> </div>
      <video controls className='videos' poster={prop.poster} >
        <source src={prop.src} type='video/mp4' />
      </video>
      <br /> 

      <div className="detail-container">
        <div className="logo-container">
          <img src={prop.CIcon} alt="Channel Icon" className='Cicon' />
        </div>

        <div className="title-container">
          <h3 className='video-title'> Video TitleVideo TitleVideo TitleVideo TitleVideo TitleVideo</h3> 
            <h4 className='channel-name-container'>abcd</h4>
            <h5 className='time-view-shower'>1M view . 1 hour ago</h5>
        </div>
      </div>


    </div>
  )
}

export default Video

