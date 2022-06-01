import React from 'react'
import './testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import profile1 from '../../img/profile1.jpg'
import profile2 from '../../img/profile2.jpg'
import profile3 from '../../img/profile3.jpg'

const Testimonials = () => {
    const clients = [
        {
            img: profile1,
            review: 
                "Lorem ipsum chuchu tsadan tsadi"
        },
        {
            img: profile2,
            review: 
                "Lorem ipsum chuchu tsadan tsadi"
        },
        {
            img: profile3,
            review: 
                "Lorem ipsum chuchu tsadan tsadi"
        }
    ]
  return (
    <div className='t-wrapper'>
        <div className='t-heading'>
            <span>Clients always get</span>
            <span>Exceptional Work</span>
            <span>from me ...</span>
                <div className='blur t-blur1' style={{ background: "var(--purple)"}} ></div>
                <div className='blur t-blur1' style={{ background: "var(--skyblue)"}} ></div>
        </div>
        {/* slider  */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}

        >
            {clients.map((client, index) => {
                return(
                    <SwiperSlide key={index}>
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                    </SwiperSlide>
                )
            }
            )}
        </Swiper>

    </div>
  )
}

export default Testimonials