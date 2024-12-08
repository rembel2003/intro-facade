import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import Services from '../../api/Services';
import ServiceSidebar from './sidebar'
import Contact from './contact';
import Link from 'next/link'
import Image from 'next/image';
import simg1 from '/public/images/service-single/2.jpg'
import simg2 from '/public/images/service-single/3.jpg'
import Footer from '../../components/footer/Footer';
import logo from '/public/images/logo-3.svg'

const ServiceSinglePage = (props) => {

    const router = useRouter()

    const serviceDetails = Services.find(item => item.slug === router.query.slug)

    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar Logo={logo} hclass={'wpo-site-header wpo-site-header-s3'} />
            <PageTitle pageTitle={serviceDetails?.title} pagesub={'Service Single'} />
            <div className="wpo-service-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-main-img">
                                        <Image src={serviceDetails?.simage} alt="eimg" />
                                    </div>
                                    <div className="wpo-service-single-title">
                                        <h2>{serviceDetails?.title}</h2>
                                    </div>
                                    <p>{serviceDetails?.description_big}</p>
                                </div>
                                <div className="wpo-service-single-item list-widget">
                                        <div className="wpo-service-single-title">
                                            <h3>Наши возможности</h3>
                                        </div>
                                        <p>Наш завод специализируется на производстве высококачественных изделий из пенопласта для различных сфер применения. Благодаря современному оборудованию и многолетнему опыту, мы предлагаем продукцию, которая сочетает в себе прочность, лёгкость и надёжность.</p>
                                        <ul>
                                            <li>Производство утеплителей для труб и систем теплоизоляции.</li>
                                            <li>Изготовление фасадного декора для архитектурного оформления зданий.</li>
                                            <li>Производство упаковочных материалов для безопасной транспортировки.</li>
                                            <li>Создание подложек для систем водяного теплого пола.</li>
                                            <li>Разработка индивидуальных решений из пенопласта под заказ.</li>
                                        </ul>
                                    </div>
                                    <div className="wpo-service-single-item">
                                        <div className="wpo-service-single-title">
                                            <h3>Наш подход</h3>
                                        </div>
                                        <p>Мы стремимся к тому, чтобы каждый этап нашего производства соответствовал самым высоким стандартам качества. Наш подход основан на инновационных технологиях, внимании к деталям и индивидуальном подходе к каждому заказчику. Мы понимаем потребности наших клиентов и предлагаем решения, которые гарантируют долговечность, эффективность и экологическую безопасность наших изделий из пенопласта.</p>
                                    </div>
                                    <div className="wpo-service-single-item list-widget">
                                        <div className="wpo-service-single-title">
                                            <h3>Наш процесс работы</h3>
                                        </div>
                                        <ul>
                                            <li>Тщательное проектирование и разработка изделий в соответствии с запросами клиентов.</li>
                                            <li>Использование современного оборудования для точного и качественного производства.</li>
                                            <li>Контроль качества на каждом этапе производства для соответствия высоким стандартам.</li>
                                            <li>Оперативная доставка готовой продукции с соблюдением сроков и условий.</li>
                                        </ul>
                                    </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Related Service</h3>
                                    </div>
                                    <div className="wpo-service-area">
                                        <div className="row align-items-center">
                                            {Services.slice(0, 2).map((service, index) => (
                                                <div className="col-md-6 col-12" key={index}>
                                                    <div className="service-card" >
                                                        <div className="image">
                                                            <Image src={service.image} alt="" />
                                                            <span>{index + 1}</span>
                                                            <div className="line-one"></div>
                                                            <div className="line-two"></div>
                                                        </div>
                                                        <div className="content">
                                                            <div className="icon">
                                                                <Image src={service.icon} alt="" />
                                                            </div>
                                                            <h2><Link  href={'/service-single/[slug]'} as={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                                            <p>{service.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-contact-area">
                                        <div className="wpo-contact-title">
                                            <h2>Have project in mind? Let's discuss</h2>
                                            <p>Get in touch with us to see how we can help you with your project</p>
                                        </div>
                                        <div className="wpo-contact-form-area">
                                            <Contact />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default ServiceSinglePage;