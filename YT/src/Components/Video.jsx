import React from 'react'
import './Style/Videos.css'


function Video(prop) 
{
  return (
    <div className='video-container'>
      <video controls className='videos' poster={prop.poster} >
        <source src={prop.src} type='video/mp4' />
      </video>
      <br /> 


      <div className="detail-container">
        <div className="logo-container">
          <img src={prop.CIcon} alt="Channel Icon" className='Cicon' />
        </div>

        <div className="title-container">
          <h3 className='video-title'> Video Title </h3>
        </div>
      </div>


    </div>
  )
}

export default Video

