import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'use-intl'

const PageTitle = (props) => {
    const t = useTranslations("Header")
    return (
        <div className="wpo-breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{t(`${props.pageTitle}`)}</h2>
                            <ul>
                                <li><Link href="/home">{t("home")}</Link></li>
                                <li>{t(`${props.pageTitle}`)}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;

