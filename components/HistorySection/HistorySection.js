import React from 'react';
import Link from 'next/link';
import Hs1 from '/public/images/history.jpg'
import VideoModal from '../ModalVideo/VideoModal';
import Image from 'next/image';
import { useTranslations } from 'use-intl';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const HistorySection = (props) => {
    const t = useTranslations("HistorySection")
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <span>{t("history")}</span>
                            <h2>{t("title")}</h2>
                            <p>
                                {t("description")}
                            </p>
                            <div className="btn_history">
                                <Link onClick={ClickHandler} href="/about">{t("discoverMore")}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-content">
                <Image src={Hs1} alt="" />
                <VideoModal/>
            </div>
        </section>
    );
};

export default HistorySection;