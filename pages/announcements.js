// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Core modules imports are same as usual
import { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/effect-fade';

export default function AnnouncementsSlides(){
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
            <SwiperSlide>
                <div className="text-center py-4">
                    <div className="ds-info ds-announcement bg-white text-dark">
                        <div className="ds-info-head py-1 px-3">
                            <p className="text-dark text-center text-uppercase fs-3 fw-bold m-0">The Prayer For Eid Al Adha</p>
                        </div>
                        <hr className="m-0" />
                        <div className="ds-info-body fs-3 py-4">
                            <p className="m-0 mb-2 px-3 fw-semibold text-center">28<sup>th</sup> June (<span className="fw-bold">7:30 AM)</span> </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className="text-center py-4">
                    <div className="ds-info ds-announcement bg-white text-dark">
                        <div className="ds-info-head py-1 px-3">
                            <p className="text-dark text-center text-uppercase fs-3 fw-bold m-0">IN THE NAME OF ALLAH</p>
                        </div>
                        <hr className="m-0" />
                        <div className="ds-info-body fs-3 py-4">
                            <p className="m-0 mb-2 px-3 fw-semibold text-center">
                                MY MERCY ENCOMPASSES ALL THINGS. SO I WILL DECREE IT FOR THOSE WHO FEAR ME AND GIVE ZAKAH AND THOSE WHO BELIVE IN OUR VERSES.
                            </p>
                            <p className='m-0 fw-semibold fs-4 text-center'>
                                <div className="divider-holder pt-3 pb-1">
                                    <div className="divider bg-success"></div>
                                </div>
                                Surah Al A`raf - Verse 156
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}