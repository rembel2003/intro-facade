import React from 'react';
import Slider from "react-slick";
import Link from 'next/link'
import VideoModal from "../ModalVideo/VideoModal";


/* images */
import Slider1 from '/public/images/slider/slide-img-1.jpg'
import Slider2 from '/public/images/slider/slide-img-2.jpg'
import Slider3 from '/public/images/slider/slide-img-3.jpg'
import Image from 'next/image';
import { useTranslations } from 'use-intl';

const Hero3 = () => {

    const t =useTranslations("products_facade_finish")

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 1000,
        autoplay: true,
        fade: true,
        responsive: [{
            breakpoint: 599,
            settings: {
                arrows: false,
            }
        }

        ]

    };

    return (
        <section className="static-hero-s3">
            <div className="container">
                <div className="content">
                    <h2>{t("title")}</h2>
                    <h3>{t("text1")}</h3>
                    <p>{t("text2")}</p>
                </div>
            </div>
            <Slider {...settings} className="hero-slider">
                <div className="item">
                    <div className="image" >
                        <Image src={Slider1} alt="" style={{
                            width: "800px", 
                            height: "800px", 
                            objectFit: "cover" // Пример дополнительного свойства, если нужно.
                        }}/>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <Image src={Slider2} alt="" style={{
                            width: "800px", 
                            height: "800px", 
                            objectFit: "cover" // Пример дополнительного свойства, если нужно.
                        }}/>
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <Image src={Slider3} alt="" style={{
                            width: "800px", 
                            height: "800px", 
                            objectFit: "cover" // Пример дополнительного свойства, если нужно.
                        }}/>
                    </div>
                </div>
            </Slider>

            <div className="line"></div>
            <div className="line-2"></div>
        </section>
    )
}

export default Hero3;