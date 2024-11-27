import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Image1 from "/public/images/ab-1.jpg"
import Image2 from "/public/images/ab-2.jpg"
import CeoImage from "/public/images/signeture.png"

const About = (props) => {
    const [aboutData, setAboutData] = useState({
        images: {
            image1: '',
            image2: '',
            ceoImage: ''
        },
        title: '',
        subtitle: '',
        paragraphs: [],
        ceoName: '',
        ceoTitle: ''
    });
    
    useEffect(() => {
        fetch('/about.json')
            .then(response => response.json())
            .then(data => {
                setAboutData({
                    images: {
                        image1: data.image1,
                        image2: data.image2,
                        ceoImage: data.ceoImage
                    },
                    title: data.title,
                    subtitle: data.subtitle,
                    paragraphs: data.paragraphs || [],
                    ceoName: data.ceoName,
                    ceoTitle: data.ceoTitle
                });
            });

    }, []);



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
                            <h2>About Company</h2>
                            <h3>Мы создаем инновационные решения из пенопласта</h3>
                            <p>Наша фабрика — один из ведущих производителей изделий из пенопласта в регионе. Уже более 10 лет мы создаем продукцию, которая находит применение в строительстве, упаковке, декоре и других сферах. Наша цель — предоставить клиентам качественные, экологически безопасные и долговечные решения.</p>
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


