import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link'


const HeroSlider = (props) => {
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
                                    <h2>Производство из пенопласта</h2>
                                </div>
                                <div className="slide-text">
                                    <p>90% заказов отправляются в тот же день</p>
                                </div>
                                <div className="slide-btns">
                                    <Link href="/about" className="theme-btn">About Us</Link>
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
                                    <h2>Изготовление высококачественных изделий</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Пунктуальность и надежность. Вы можете быть уверены, что изготовление и доставка будут исполнены в заранее оговоренное время.</p>
                                </div>
                                <div className="slide-btns">
                                    <Link href="/about" className="theme-btn">About Us</Link>
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
                                    <h2>Мы создаем продукты которые упрощают жизнь</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Воплотим в форму любую вашу фантазию!</p>
                                </div>
                                <div className="slide-btns">
                                    <Link href="/about" className="theme-btn">About Us</Link>
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