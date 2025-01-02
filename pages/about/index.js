import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-3.png'
import FunFactS3 from "../../components/FunFactS3/FunFactS3"

export async function getStaticProps(context) {
    return {
      props: {
        now: new Date().toISOString(),
        // You can get the messages from anywhere you like. The recommended
        // pattern is to put them in JSON files separated by locale and read
        // the desired one based on the `locale` received from Next.js.
        messages: (await import(`../../messages/${context.locale}.json`)).default
      }
    };
  }

const AboutPage = () => {
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <PageTitle pageTitle={'about_us'}  />
            <About hclass={'wpo-about-section section-padding'} />
            <FunFactS3/>
            <ServiceSection hclass={"wpo-service-section section-padding"} />
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default AboutPage;
