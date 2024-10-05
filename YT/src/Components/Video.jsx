import React from 'react'
import './Style/Videos.css'


function Video(prop) 
{
  return (
    <div className='video-wrapper'>
     <video controls className='videos' poster={prop.poster} >
      <source src={prop.src} type='video/mp4' />
     </video>
     <h3 className='video-title'> Video Title </h3>
     {/* <div className="channel-logo-container"> */}
      {/* <img src={prop.CIcon} alt="Channel Icon" className='Cicon' /> */}
     {/* </div> */}
    </div>
  )
}

export default Video

