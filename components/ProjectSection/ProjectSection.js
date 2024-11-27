import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import Projects from "../../api/projects";
import Image from "next/image";



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection = (props) => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
        ]
    };
    return (
        <section className={"" + props.hclass}>
            <div className="container-fluid">
                <div className="project-slider">
                    <Slider {...settings}>
                        {Projects.slice(0, 5).map((project, pitem) => (
                            <div className="project-card" key={pitem}>
                                <div className="image">
                                    <Image src={project.pimg1} alt="" />
                                </div>
                                <div className="content">
                                    <h3><Link onClick={ClickHandler} href={'/project-single/[slug]'} as={`/project-single/${project.slug}`}>{project.title}</Link></h3>
                                    <p>{project.docomunt}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}
export default ProjectSection;