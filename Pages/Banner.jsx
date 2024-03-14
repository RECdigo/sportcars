import React, {useState} from 'react'
import Carcard from '../components/Carcard'
import Carousel from '../components/Carousel'
import Nav from '../components/Nav'
import Play from '../components/Play'
import Social from '../components/Social'
import Squar from '../components/Squar'
import Video from '../components/Video'
import videosData from '../Data/videosData'

function Banner({toggleMenu}) {
  
  const [activeVideo, setActiveVideo] = useState(videosData) 
  const [playPause, setPlayPause] = useState (false)

  const togglePlayPause = () => {

    setPlayPause(!playPause)

  }

  const handleActiveVideo = (id) => {
    setActiveVideo(activeVideo.map(video => {
          video.active = false
        if (video.id === id) {
            return {...video, active: true};
        } else {
            return video;
        }
    }));
}

  return (
    <div className="banner">

      <Nav toggleMenu={toggleMenu}/>
      <Video activeVideo={activeVideo} playPause={playPause}/>
      <Carcard activeVideo={activeVideo}/>
      <Carousel handleActiveVideo={handleActiveVideo}/>
      <Squar activeVideo={activeVideo} />
      <Social />
      <Play playPause={playPause} togglePlayPause={togglePlayPause}/>
    
    </div>
    
  )
}

export default Banner
