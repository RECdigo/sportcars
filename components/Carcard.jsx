import React from 'react'
import './carcard.css'


function Carcard({activeVideo}) {

  

  return (
    <>
    {activeVideo.map(videoData => (
        
        <div key={videoData.id}  className={`content ${videoData.active ? 'active' : undefined}`}>
          <h1>{videoData.name}</h1>
          <h3 className={`model`} style={{color:videoData.color}}>{videoData.model}</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempor vehicula sapien, 
          sed tincidunt nisi. Phasellus blandit eleifend lacus. Curabitur volutpat sem non ante hendrerit 
          hendrerit non sit amet nisl. Aliquam non erat elit. Phasellus at lacus quis quam pulvinar aliquet.
          </p>
          <a href="#">Enquire</a>
        </div>
    ))}
    
    </>
  )
}

export default Carcard
