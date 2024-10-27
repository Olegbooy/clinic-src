import { useRef } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Keyboard, EffectFade } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


const Slider = ({ className, children }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const paginationRef = useRef(null);




    return (
        <div className={`swiperContainer ${className}`}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay, Keyboard, EffectFade]}
                keyboard={{
                    enabled: true
                }}
                effect={'fade'}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={true}
                className='swiper'
                loop={true}

                pagination={{
                    dynamicBullets: true,
                    dynamicMainBullets: 3,
                    clickable: true
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.params.pagination.el = paginationRef.current;
                }}

            >
                {children}
            </Swiper>

            <div className='controls' style={{ display: 'none' }}>
                <button ref={prevRef} className='swiper-button-next'>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.11512 1.24634L1.00024 5.70156L6.11512 10.1568" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="pagination-wrapper">
                    <div ref={paginationRef} className='swiper-pagination'></div>
                </div>


                <button ref={nextRef} className='swiper-button-prev'>
                    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.11512 1.24634L1.00024 5.70156L6.11512 10.1568" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

        </div>
    );
};

export default Slider;


