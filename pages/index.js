import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import HistorySection from '../components/HistorySection/HistorySection';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-3.png'
import HeroSlider from '../components/HeroSlider/HeroSlider'
import About2 from '../components/about2/about2';
import ServiceSection2 from '../components/ServiceSection2/ServiceSection2';
import HeaderTopbar from '../components/HeaderTopbar/HeaderTopbar';

export async function getStaticProps(context) {
    return {
      props: {
        now: new Date().toISOString(),
        // You can get the messages from anywhere you like. The recommended
        // pattern is to put them in JSON files separated by locale and read
        // the desired one based on the `locale` received from Next.js.
        messages: (await import(`../messages/${context.locale}.json`)).default
      }
    };
  }

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