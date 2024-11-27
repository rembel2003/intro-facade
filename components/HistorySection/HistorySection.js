import React from 'react';
import Link from 'next/link';
import Hs1 from '/public/images/history.jpg'
import VideoModal from '../ModalVideo/VideoModal';
import Image from 'next/image';

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const HistorySection = (props) => {
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="content">
                            <span>Our History</span>
                            <h2>Company history, present and the future</h2>
                            <p>14 лет назад, когда мы предложили клиентам декор фасада в 5 раз дешевле по цене и быстрее в производстве, чем украшения из гипса и полиуретана, они сомневались в том, что это возможно.

                                Мы одни из первых начали продвижение на рынок новой строительной технологии декора фасада элементами из пенопласта, применяемых в Канаде и США. Запустив производственную линию по выпуску изделий из пенополистирола, мы выполняем любые дизайнерские решения, которые обходятся клиенту значительно дешевле по цене аналогов из других материалов, долговечнее в эксплуатации и быстрее в производстве.</p>
                            <div className="btn_history">
                                <Link onClick={ClickHandler} href="/about">Discover More</Link>
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