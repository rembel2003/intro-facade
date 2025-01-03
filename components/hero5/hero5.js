import React from 'react';
import { useTranslations } from 'use-intl';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}
const hero5 = () => {
    const t =useTranslations("montaj")
    return (
        <section className="static-hero-s5">
            <div className="container">
                <div className="content">
                    <h2>{t("title")}</h2>
                    <h3>{t("subtitle")} <span>Intro</span> Facade</h3>
                    <p>{t("description")}</p>
                </div>
            </div>
        </section>
    );
};

export default hero5;