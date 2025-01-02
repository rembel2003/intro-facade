'use client'
import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link'
import { useTranslations} from 'use-intl';


const HeroSlider = (props) => {
    const t = useTranslations('HeroSlider');

    return (

        <section className={"" + props.hclass} >
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-9.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>{t('slide_1_title')}</h2>
                                </div>
                                <div className="slide-text">
                                    <p>{t('slide_1_text')}</p>
                                </div>
                                <div className="slide-btns">
                                    <Link href="/about" className="theme-btn">{t('about_us_button')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-8.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>{t('slide_2_title')}</h2>
                                </div>
                                <div className="slide-text">
                                    <p>{t('slide_2_text')}</p>
                                </div>
                                <div className="slide-btns">
                                    <Link href="/about" className="theme-btn">{t('about_us_button')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'/images/slider/slide-10.jpg'})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>{t('slide_3_title')}</h2>
                                </div>
                                <div className="slide-text">
                                    <p>{t('slide_3_text')}</p>
                                </div>
                                <div className="slide-btns">
                                    <Link href="/about" className="theme-btn">{t('about_us_button')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                ...
            </Swiper>
        </section>
    )
}

export default HeroSlider;