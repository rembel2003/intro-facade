import React from 'react'
import Link from 'next/link'
import abImg from '/public/images/ab-5.jpg'
import Image from 'next/image';
import { useTranslations } from 'use-intl';


const About3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const t = useTranslations("products_facade_finish")

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-left-image">
                            <div className="image">
                                <Image src={abImg} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <div className="text">
                                <h2>{t("title1")}</h2>
                                <h3>{t("title2")}</h3>
                                <p>{t("text3")}</p>
                            </div>
                            <div className="list">
                                <ul>
                                    <li><i className="ti-check"></i> <span>{t("icon")}</span></li>
                                    <li><i className="ti-check"></i> <span>{t("icon2")}</span></li>
                                    <li><i className="ti-check"></i> <span>{t("icon3")}</span></li>
                                </ul>
                                <ul>
                                    <li><i className="ti-check"></i> <span>{t("icon4")}</span></li>
                                    <li><i className="ti-check"></i> <span>{t("icon5")}</span></li>
                                    <li><i className="ti-check"></i> <span>{t("icon6")}</span></li>
                                </ul>

                            </div>
                            <div className="about-btn">
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">{t("about")}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About3;