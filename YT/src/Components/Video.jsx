import React from 'react'
import './Style/Videos.css'


function Video(prop) 
{
  return (
    <div>
     <div className="videowrapper">
     <video controls className='videos' poster={prop.poster} >
          <source src={prop.src} type='video/mp4' />
     </video>
     </div>
    </div>
  )
}

export default Video

