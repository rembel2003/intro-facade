import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const HeaderTopbar = (props) => {
    const router = useRouter();

    // Функция для изменения языка
    const changeLanguage = (e) => {
        const selectedLocale = e.target.value;
        const { pathname, query, asPath } = router;

        router.push({ pathname, query }, asPath, { locale: selectedLocale });
    };
    
    return (
        <div className="topbar" >
            <div className="container-fluid">
                <div className="row">
                    <div className="col col-lg-7 col-md-8 col-sm-12 col-12">
                        <div className="contact-intro">
                            <ul>
                                <li><i className="fi flaticon-email"></i>IntroFacade@gmail.com</li>
                                <li><i className="fi flaticon-phone-call"></i> +373-792-997-77</li>
                                <li><i className="fi ti-location-pin"></i> Chișinău Calea Orheiului, nr. 125/1</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-5 col-md-4 col-sm-12 col-12">
                        <div className="contact-info">
                            <ul>
                                <li className="language">
                                <select
                                        name="language"
                                        id="language"
                                        value={router.locale} // Устанавливаем текущий язык
                                        onChange={changeLanguage}
                                    >
                                        <option value="en">English</option>
                                        <option value="ro">Romanian</option>
                                        <option value="ru">Russian</option>
                                    </select>
                                </li>
                                <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link href="/"><i className="ti-instagram"></i></Link></li>
                                <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link href="/"><i className="ti-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeaderTopbar;

