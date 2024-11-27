import React from "react";
import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";
import blogs from '../../api/blogs'
import Image from "next/image";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = (props) => {



    return (
        <section className={"" + props.tClass}>
            <div className="container">
                <div className="row justify-content-left">
                    <div className="col-12">
                        <SectionTitle title={'blog'} subtitle={'News & articles'} />
                    </div>
                </div>
                <div className="row">
                    {blogs.slice(0.3).map((bloge, bkye) => (
                        <div className="col-lg-4 col-md-6 col-12" key={bkye}>
                            <div className="blog-card">
                                <div className="image">
                                    <Image src={bloge.screens} alt="" />
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>{bloge.create_at}</li>
                                        <li>By: {bloge.author}</li>
                                    </ul>
                                    <h2><Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${bloge.slug}`}>{bloge.title}</Link></h2>
                                    <p>{bloge.description}</p>
                                    <Link onClick={ClickHandler} href={'/blog-single/[slug]'} as={`/blog-single/${bloge.slug}`}>{bloge.link}<i className="ti-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogSection;




