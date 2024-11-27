import React from 'react';
import Link from 'next/link';
import About1 from '/public/images/ab-3.jpg';
import About3 from '/public/images/ab-4.jpg';
import Image from 'next/image';

const About2 = (props) => {

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
                                <h2>О компании</h2>
                                <h3>Качество по лучшим ценам</h3>
                                <p>
                                    На рынке производства продукции из пенопласта компания «INTRO FACADE» является экспертом с 2014 года проверенной репутацией. Для каждого клиента, который стремится внести разнообразие в свою жизнь, используя для дома, офисного помещения, торговой площадки, сада высокоэстетичные изделия из пенополистирола, ведущая компания «INTRO_FACADE» готова стать надежным партнером и другом.
                                </p>
                            </div>
                            <div className="list">
                                <ul>
                                    <li><i className="ti-check"></i> <span>Гарантия долговечности</span></li>
                                    <li><i className="ti-check"></i> <span>Полное соответствие задаче</span></li>
                                    <li><i className="ti-check"></i> <span>Выполнение точно в срок</span></li>
                                </ul>
                                <ul>
                                    <li><i className="ti-check"></i> <span>Удобные условия партнерам</span></li>
                                    <li><i className="ti-check"></i> <span>Широкий диапазон выбора</span></li>
                                    <li><i className="ti-check"></i> <span>Консультации</span></li>
                                </ul>

                            </div>
                            <div className="about-btn">
                                <Link onClick={ClickHandler} href="/about" className="theme-btn">About Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;