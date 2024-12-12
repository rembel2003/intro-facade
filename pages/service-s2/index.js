import React, { Fragment } from 'react';
import { useState,useEffect } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-3.png'
import Hero3 from '../../components/hero3/hero3';
import About from '../../components/about3/about3';
import Contact from '../team-single/contact';


const ServicePage2 = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const containerStyle = {
    width: windowWidth <= 768 ? '' : '800px',
    position: "relative",
    left: windowWidth <= 768 ? '' : '25%',
    textAlign: "center",
  };
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <Hero3/>
            <About hclass={'wpo-about-section-s3 section-padding'}/>
            <div className="wpo-contact-area ex-wiget" 
            style={containerStyle}>
                                        <h2>Contact Me</h2>
                                        <div className="quote-form">
                                            <Contact />
                                        </div>
            </div>
            <section className="wpo-contact-map-section" style={{paddingTop: "20px"}}>
                <div className="wpo-contact-map">
                <iframe title='comtact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.052726766368!2d28.849824026964363!3d47.05881602114494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d1ba841f861%3A0x235f88d6b1a2cdd1!2sStrada%20Calea%20Orheiului%20125%2F1%2C%20Chi%C8%99in%C4%83u%2C%20Moldova!5e0!3m2!1sen!2s!4v1733943043569!5m2!1sen!2s"></iframe>
                </div>
            </section>
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default ServicePage2;
