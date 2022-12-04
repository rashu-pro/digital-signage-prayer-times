// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Core modules imports are same as usual
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import useSWR from "swr";
import getSlug from "./slug";
import styleUtility from "../styles/Utility.module.css";
// import 'swiper/css/effect-fade';

const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function AnnouncementsSlides(){
  const { data, error } = useSWR('https://secure-api.net/api/v1/company-prayer?slug='+getSlug(), fetcher)
  if(error) return <p className='text-center'> Failed to load... </p>
  if(!data) return <p className='text-center'>loading...</p>

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
                delay: 6000,
                disableOnInteraction: false,
            }}
            // effect="fade"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
          {data.events.map((data, index)=>(
            <SwiperSlide key={index}>
              <div className="text-center py-4">
                <div className="ds-info ds-announcement bg-white text-dark">
                  <div className="ds-info-head py-1 px-3">
                    <p className="text-dark text-center text-uppercase fs-3 fw-bold m-0">{data.title}</p>
                  </div>
                  <hr className="m-0" />
                  <div className="ds-info-body fs-3 py-4">
                    <p className="m-0 mb-2 px-3 fw-semibold text-center">{data.description} </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    )
}