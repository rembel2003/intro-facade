import React from 'react';
import CountUp from 'react-countup';

import icon5 from '/public/images/feature/5.svg';
import icon6 from '/public/images/feature/6.svg';
import icon7 from '/public/images/feature/7.svg';
import icon8 from '/public/images/feature/8.svg';
import Image from 'next/image';
import { useTranslations } from 'use-intl';


const FunFactS3 = (props) => {
    const t = useTranslations("FunFactS3")
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <Image src={icon5} alt="" />
                            </div>
                            <div className="content">
                                <h3>{t("free_delivery")}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <Image src={icon6} alt="" />
                            </div>
                            <div className="content">
                                <h3>{t("high_quality")}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <Image src={icon7} alt="" />
                            </div>
                            <div className="content">
                                <h3>{t("best_prices")}</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                        <div className="item">
                            <div className="icon">
                                <Image src={icon8} alt="" />
                            </div>
                            <div className="content">
                                <h3>{t("service_warranty")}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FunFactS3;