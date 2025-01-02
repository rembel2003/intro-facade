import React from "react";
import Link from 'next/link'
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "../../api/Services";
import Image from "next/image";
import { useTranslations } from "use-intl";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = (props) => {

    const t = useTranslations("ServiceSection2")

    const settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };



    return (
        <section className={"" + props.hclass}>
            <div className="service-wrap">
                <SectionTitle title="What We Offer" subtitle="Our Services" />
                <div className="service-slider">
                    <Slider {...settings}>
                        {Services.slice(0, 5).map((service, index) => (
                            <div className="item" key={index}>
                                <div className="image">
                                    <Image src={service.image} alt="" />
                                    <span>{index + 1}</span>
                                    <div className="line-one"></div>
                                    <div className="line-two"></div>
                                </div>
                                <div className="content">
                                    <div className="icon">
                                        <Image src={service.icon} alt="" />
                                    </div>
                                    <h2><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${t(`${service.slug}`)}`}>{t(`${service.title}`)}</Link></h2>
                                    <p>{t(`${service.description}`)}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;




