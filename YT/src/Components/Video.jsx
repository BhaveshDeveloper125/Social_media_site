import React from 'react'
import './Style/Videos.css'


function Video(prop) 
{
  return (
    <div className='video-wrapper'>
     <video controls className='videos' poster={prop.poster} >
          <source src={prop.src} type='video/mp4' />
     </video>
    </div>
  )
}

export default Video

