import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-3.svg'
import Hero3 from '../../components/hero3/hero3';
import About from '../../components/about3/about3';
import Contact from '../team-single/contact';


const ServicePage2 = () => {
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <Hero3/>
            <About hclass={'wpo-about-section-s3 section-padding'}/>
            <div className="wpo-contact-area ex-wiget" 
            style={{
                            width: "800px",
                            position: "relative",
                            left: "30%",
                            textAlign: "center"

                        }}>
                                        <h2>Contact Me</h2>
                                        <div className="quote-form">
                                            <Contact />
                                        </div>
            </div>
            <section className="wpo-contact-map-section" style={{
                            width: "100%px", 
                        }}>
                <div className="wpo-contact-map">
                    <iframe title='comtact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe>
                </div>
            </section>
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default ServicePage2;
