import React from 'react'
import Link from 'next/link'
import abImg from '/public/images/ab-5.jpg'
import Image from 'next/image';


const About3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

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
                                <h2>Фасадные панели</h2>
                                <h3>Полифасад</h3>
                                <p>
                                    Полифасад изготавливается по технологии,которая представляет собой сращивание двух слоев (утеплителя и зашитного слоя ) в единую плиту.Такая технология позволяет продлить срок службы панелей и снизить их стоимость без потери качества.
                                </p>
                            </div>
                            <div className="list">
                                <ul>
                                    <li><i className="ti-check"></i> <span>21 Фактура фасадных панелей</span></li>
                                    <li><i className="ti-check"></i> <span>2 Вариата теплоизоляции</span></li>
                                    <li><i className="ti-check"></i> <span>Легко режутся</span></li>
                                </ul>
                                <ul>
                                    <li><i className="ti-check"></i> <span>Устойчива к механическому воздействию</span></li>
                                    <li><i className="ti-check"></i> <span>Качественное изготовление</span></li>
                                    <li><i className="ti-check"></i> <span>Быстрая доставка</span></li>
                                </ul>

                            </div>
                            <div className="about-btn">
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">Подробнее о фасадных панелях</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About3;