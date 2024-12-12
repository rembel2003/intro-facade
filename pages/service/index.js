import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-3.png'


const ServicePage = () => {
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <PageTitle pageTitle={'Продукция из пенопласта'} pagesub={'Service'} />
            <ServiceSection hclass={"wpo-service-section s2 section-padding"} />
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default ServicePage;
