import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Hero5 from '../../components/hero5/hero5';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '/public/images/logo-3.png'
import Testimonial from '../../components/Testimonial/Testimonial'
import Testimonial2 from '../../components/Testimonial2/Testimonial2'


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

const ProjectPage = () => {
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <Hero5/>
            <Testimonial2/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ProjectPage;