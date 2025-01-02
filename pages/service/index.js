import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-3.png'


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


const ServicePage = () => {
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <PageTitle pageTitle={'products_foam'} pagesub={'Service'} />
            <ServiceSection hclass={"wpo-service-section s2 section-padding"} />
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default ServicePage;
