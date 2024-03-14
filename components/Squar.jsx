import React from 'react'
import './squar.css'
import videos from '../Data/videosData'

function Squar({activeVideo}) {
  return (
    <div className="screen">
                <div className="shadow"></div>
                    <span style={{ '--i': 0 }}>
                    {
                        activeVideo.map(videoData => (
                            <video
                                src={require(`../videos/${videoData.file}`)}
                                className={`trailer ${videoData.namenum} screen-video ${videoData.active ? 'active' : undefined}`}
                                autoPlay
                                loop
                                muted
                            ></video>
                            
                        ))
                    }
                    </span>
                    <span style={{ '--i': 1 }}>
                        <video
                            src={require(`../videos/trailer-1.mp4`)}
                            className='screen-video'
                            autoPlay
                            loop
                            muted>
                        </video>
                    </span>
                    <span style={{ '--i': 2 }}>
                        <video
                            src={require(`../videos/trailer-2.mp4`)}
                            className='screen-video'
                            autoPlay
                            loop
                            muted>
                        </video>
                    </span>
                    <span style={{ '--i': 3 }}>
                        <video
                            src={require(`../videos/trailer-3.mp4`)}
                            className='screen-video'
                            autoPlay
                            loop
                            muted>
                        </video>
                    </span>

            </div>
  )
}

export default Squar
