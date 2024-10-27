import clsx from 'clsx';
import classes from './Cookie.module.scss';
import { manrope } from '@/fonts/fonts';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

const Cookie = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!Cookies.get('cookieAccepted')) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set('cookieAccepted', 'true', { expires: 30 });
        setIsVisible(false);
    };

    const handleReject = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={clsx(classes.cookiePlate, manrope.className)}>
            <svg className={classes.closeCookie} onClick={handleReject} xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                <rect x="8.32745" y="10.9354" width="2" height="26" transform="rotate(-48.7324 8.32745 10.9354)" fill="#1F1F29" />
                <rect x="26.5812" y="8.32742" width="2" height="26" transform="rotate(41.2676 26.5812 8.32742)" fill="#1F1F29" />
            </svg>

            <div className={classes.top}>
                <h1 dangerouslySetInnerHTML={{ __html: t('cookie:0') }}></h1>
            </div>

            <h3 dangerouslySetInnerHTML={{ __html: t('cookie:1') }}></h3>

            <div className={classes.bottom}>
                <button onClick={handleAccept}>
                    <span className={manrope.className} dangerouslySetInnerHTML={{ __html: t('cookie:2') }}></span>
                </button>
                <span className={classes.separator}></span>
                <button onClick={handleReject}>
                    <span dangerouslySetInnerHTML={{ __html: t('cookie:3') }}></span>
                </button>
            </div>
        </div>
    );
};

export default Cookie;
