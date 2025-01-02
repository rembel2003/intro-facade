import React from 'react';
import Link from 'next/link';
import About1 from '/public/images/ab-3.jpg';
import About3 from '/public/images/ab-4.jpg';
import Image from 'next/image';
import { useTranslations } from 'use-intl';

const About2 = (props) => {

    const t =useTranslations("About2")

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="about-left-image">
                            <div className="ab-3">
                                <Image src={About1} alt=""/>
                            </div>
                            <div className="ab-4">
                                <Image src={About3} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <div className="text">
                                <h2>{t("company_title")}</h2>
                                <h3>{t("quality_title")}</h3>
                                <p>
                                    {t("company_description")}
                                </p>
                            </div>
                            <div className="list">
                                <ul>
                                    <li><i className="ti-check"></i> <span>{t("guarantee")}</span></li>
                                    <li><i className="ti-check"></i> <span>{t("task_compliance")}</span></li>
                                    <li><i className="ti-check"></i> <span>{t("on_time")}</span></li>
                                </ul>
                                <ul>
                                    <li><i className="ti-check"></i> <span>{t("partner_conditions")}</span></li>
                                    <li><i className="ti-check"></i> <span>{t("wide_selection")}</span></li>
                                    <li><i className="ti-check"></i> <span>{t("consultations")}</span></li>
                                </ul>

                            </div>
                            <div className="about-btn">
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">{t("about_us_button")}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;