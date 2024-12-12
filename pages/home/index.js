import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar'
import HeroSlider from '../../components/HeroSlider/HeroSlider';
import About2 from '../../components/about2/about2';
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-3.png'
import HistorySection from "../../components/HistorySection/HistorySection";


const HomePage = () => {
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <HeroSlider hclass={'wpo-hero-slider wpo-hero-slider-s2'} />
            <About2 hclass={'wpo-about-section-s2 section-padding'} />
            <ServiceSection2 hclass={"wpo-service-section-s2 section-padding"} />
            <HistorySection hclass={'wpo-history-section'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;