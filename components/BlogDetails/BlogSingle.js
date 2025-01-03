import React from 'react';
import Link from 'next/link'
import blog3 from '/public/images/blog-details/comments-author/img-1.jpg'
import blog4 from '/public/images/blog-details/comments-author/img-2.jpg'
import blog5 from '/public/images/blog-details/comments-author/img-3.jpg'
import blog6 from '/public/images/blog-details/author.jpg'
import gl1 from '/public/images/blog/img-1.jpg'
import gl2 from '/public/images/blog/img-2.jpg'
import blogs from '../../api/blogs';
import { useRouter } from 'next/router'
import BlogSidebar from '../BlogSidebar/BlogSidebar.js'
import Image from 'next/image.js';
import { useTranslations } from 'use-intl';


const BlogSingle = (props) => {

    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    const t = useTranslations("promotions")

    return (
        <section className="wpo-blog-single-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            <div className="post format-standard-image">
                                <div className="entry-media">
                                    <Image src={BlogDetails?.blogSingleImg} alt="" />
                                </div>
                                <div className="entry-meta">
                                    <ul>
                                        
                                        <li><i className="fi flaticon-calendar"></i> {BlogDetails?.create_at}</li>
                                    </ul>
                                </div>
                                <h2>{t(`${BlogDetails?.title2}`)}</h2>
                                
                                <blockquote>
                                   {t(`${BlogDetails.description}`)}
                                </blockquote>

                            </div>
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft} />
                </div>
            </div>
        </section>
    )

}

export default BlogSingle;
