import React, { useState } from 'react'
import Link from 'next/link'
import MobileMenu from '../MobileMenu/MobileMenu'
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import Image from 'next/image';
import { useTranslations } from 'use-intl';



const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;

    const t = useTranslations('Header')


    return (
        <header id="header">
            <div className={"" + props.hclass}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <MobileMenu />
                            </div>
                            <div className="col-lg-2 col-md-6 col-6 ">
                                <div className="navbar-header ">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/home"><Image src={props.Logo}
                                        alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/home">{t('home')}</Link>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/about">{t('about_us')}</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/service">{t('products')}</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/service">{t('products_foam')}</Link></li>
                                                <li><Link onClick={ClickHandler} href="/service-s2">{t('products_facade_finish')}</Link></li>
                                                <li><Link onClick={ClickHandler} href="/shop">{t('products_online_store')}</Link></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/project">{t('installation')}</Link>
                                        </li>
                                        
                                        <li className="menu-item-has-children">
                                            <Link onClick={ClickHandler} href="/blog">{t('promotions')}</Link>
                                            
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/contact">{t('contact')}</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="close-form">
                                        <Link onClick={ClickHandler} className="theme-btn" href="/contact">{t('get_in_touch')}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};


export default connect(mapStateToProps, { removeFromCart })(Header);