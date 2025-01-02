import React, { useState } from 'react'
import Link from 'next/link'
import logo from '/public/images/logo-3.png'
import Services from '../../api/Services';
import Image from 'next/image';
import { useTranslations } from 'use-intl';
import { useTranslation } from 'react-i18next';



const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer = (props) => {
    const [email, setEmail] = useState('');

    const t = useTranslations("ServiceSection2")
    const h = useTranslations("Header")
    const f = useTranslations("Footer")

    const handleReset = () => {
        setEmail('');
    };
    return (
        <footer className="wpo-site-footer">
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="logo widget-title">
                                    <Image src={logo} alt="blog" />
                                </div>
                                <div className="social-widget">
                                    <ul>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-facebook"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-instagram"></i></Link></li>
                                        <li><Link onClick={ClickHandler} href="/"><i className="ti-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>{f("our_services")}</h3>
                                </div>
                                <ul>
                                    {Services.slice(0, 5).map((service, Sitem) => (
                                        <li key={Sitem}><Link onClick={ClickHandler} href={'/service-single/[slug]'} as={`/service-single/${t(`${service.slug}`)}`}>{t(`${service.title}`)}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>{f("navigation")}</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} href="/">{h("home")}</Link></li>
                                    <li><Link onClick={ClickHandler} href="/about">{h("about_us")}</Link></li>
                                    <li><Link onClick={ClickHandler} href="/service">{h("products")}</Link></li>
                                    <li><Link onClick={ClickHandler} href="/blog">{h("promotions")}</Link></li>
                                    <li><Link onClick={ClickHandler} href="/contact">{h("contact")}</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget newsletter-widget">
                                <div className="widget-title">
                                    <h3>{f("newsletter")}</h3>
                                </div>
                                <p>{f("get_latest")}</p>
                                <div className="email-from">
                                    <input
                                        className="fild"
                                        type="text"
                                        placeholder={f("placeholder")}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button type="button" onClick={handleReset}>
                                        <i className="ti-arrow-top-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
            <div className="wpo-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <p className="copyright"> Copyright &copy; 2024  by <Link onClick={ClickHandler} href="/">Iurii Burlacov</Link>. All
                                Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;







