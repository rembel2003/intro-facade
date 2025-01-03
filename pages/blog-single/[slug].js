
import React, {Fragment} from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import BlogSingle from '../../components/BlogDetails/BlogSingle.js'
import Footer from '../../components/footer/Footer';
import Logo from '/public/images/logo-3.png'

export async function getStaticProps({ params, locale }) {
    const blog = blogs.find((item) => item.slug === params.slug);

    if (!blog) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            blog,
            messages: (await import(`../../messages/${locale}.json`)).default,
        },
    };
}

export async function getStaticPaths() {
    const paths = blogs.map((blog) => ({
        params: { slug: blog.slug },
    }));

    return {
        paths,
        fallback: true, // true или 'blocking' позволяет обрабатывать несуществующие пути
    };
}

const BlogDetails =() => {

    const router = useRouter();

    // Если fallback = true, нужно обрабатывать состояния загрузки
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)

    return(
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <PageTitle pageTitle={"promotions"} pagesub={'Blog'}/> 
             <BlogSingle/>
             <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetails;