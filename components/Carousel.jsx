import React, {useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import 'swiper/css'
import './carousel.css'
import videos from '../Data/videosData'

function Carousel({handleActiveVideo}) {

  return (
    <div className="gallery">
                <div className="carousel">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                        rotate: 60,
                        stretch: 0,
                        depth: 500,
                        modifier: 1,
                        slideShadows: true,
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                          }}
                    >
                        {
                            videos.map(videoData => (
                                <SwiperSlide >
                                    <img 
                                        src={require(`../images/cars/${videoData.image}`)} 
                                        onClick={() => handleActiveVideo(videoData.id)} 
                                    />                        
                                </SwiperSlide>
                            ))  
                        }                    
                    </Swiper>
                </div>
            </div>
  )
}

export default Carousel
