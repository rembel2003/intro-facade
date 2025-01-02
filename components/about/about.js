import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Image1 from "/public/images/ab-1.jpg"
import Image2 from "/public/images/ab-2.jpg"
import CeoImage from "/public/images/signeture.png"
import { useTranslations } from 'use-intl';

const About = (props) => {
    const t = useTranslations("About")
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-12">
                        <div className="about-left-image">
                            <Image src={Image1} alt="" />
                            <div className="ab-2">
                                <Image src={Image2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <h2>{t("title")}</h2>
                            <h3>{t("subtitle")}</h3>
                            <p>{t("description")}</p>
                            <div className="ceo-content">
                                <div className="image">
                                    <Image src={CeoImage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;


