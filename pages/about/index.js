import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-3.PNG'
import FunFactS3 from "../../components/FunFactS3/FunFactS3"


const AboutPage = () => {
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About hclass={'wpo-about-section section-padding'} />
            <FunFactS3/>
            <ServiceSection hclass={"wpo-service-section section-padding"} />
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default AboutPage;
