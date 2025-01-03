import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '/public/images/testimonial/img-1.jpg'
import Img2 from '/public/images/testimonial/img-2.jpg'
import Img3 from '/public/images/testimonial/img-3.jpg'
import Img4 from '/public/images/testimonial/img-4.jpg'
import Image from 'next/image';
import { useTranslations } from 'use-intl';


const testimonials = [
    {
        id: '01',
        img: Img1,
        Des: "Des1",
        title: 'Ivan Bitca',
        sub: "sub1",
    },
    {
        id: '02',
        img: Img2,
        Des: "Des2",
        title: 'Evgenii Sirbu',
        sub: "sub2",
    },
    {
        id: '03',
        img: Img3,
        Des: "Des3",
        title: 'Martin Burlacu',
        sub: "sub3",
    },
    {
        id: '04',
        img: Img4,
        Des: "Des4",
        title: 'Dmitrii Sologub',
        sub: "sub4",
    },

]




const Testimonial2 = (props) => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    };

    const t = useTranslations("testimonials")

    return (

        <section className={"" + props.tClass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        <div className="wpo-section-title-s2">
                            <h3>{t("subtitle")}</h3>
                        </div>
                    </div>
                </div>
                <div className="testimonial-slide">
                    <Slider {...settings}>
                        {testimonials.map((testitem, titem) => (
                            <div className="testimonial-card" key={titem}>
                                <div className="content">
                                    <p>{t(`${testitem.Des}`)}</p>
                                </div>
                                <div className="client">
                                    <div className="client-img">
                                        <Image src={testitem.img} alt="" />
                                    </div>
                                    <div className="client-text">
                                        <h4>{testitem.title}</h4>
                                        <span>{t(`${testitem.sub}`)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Testimonial2;







