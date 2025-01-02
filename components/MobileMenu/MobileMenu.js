import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
import { useTranslations } from 'use-intl';

const menus = [
    {
        id: 1,
        title: 'home',
        link: '/home',
    },
    {
        id: 88,
        title: 'about_us',
        link: '/about',
    },
    {
        id: 7,
        title: 'products',
        link: '#',
        submenu: [
            {
                id: 71,
                title: 'products_foam',
                link: '/service',
            },
            {
                id: 72,
                title: 'products_facade_finish',
                link: '/service-s2',
            },
            {
                id: 73,
                title: 'products_online_store',
                link: '/service-s3',
            },
            
           
            
        ]
    },
    {
        id: 44,
        title: 'installation',
        link: '/project',
        
    },
    {
        id: 5,
        title: 'promotions',
        link: '/blog',
    },
    {
        id: 88,
        title: 'contact',
        link: '/contact',
    }
]


const MobileMenu = () => {
    const t = useTranslations("Header")
    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{t(`${item.title}`)}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{t(`${submenu.title}`)}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.link}>{t(`${item.title}`)}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;