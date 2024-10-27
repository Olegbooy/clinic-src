import { useState, useEffect, useRef } from 'react';
import Form from '../../components/Form/Form';
import classes from '../styles.module.scss';
import clsx from 'clsx';

const Popup = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isClient, setIsClient] = useState(false); // Додаємо стан для перевірки клієнтської сторони
    const popupRef = useRef(null);

    useEffect(() => {
        setIsClient(true); // Позначаємо, що ми на клієнтській стороні

        if (typeof window === 'undefined') return;

        const isClosed = localStorage.getItem('popupClosed') === 'true';

        if (!isClosed) {
            const handleScroll = () => {
                if (!popupRef.current) return;

                const rect = popupRef.current.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

                if (isVisible) {
                    setIsPopupVisible(true);
                }
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll();

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    const closePopup = () => {
        setIsPopupVisible(false);
        if (typeof window !== 'undefined') {
            localStorage.setItem('popupClosed', 'true');
        }

        setTimeout(() => {
            if (popupRef.current) {
                popupRef.current.remove();
            }
        }, 500);
    };

    if (!isClient || (typeof window !== 'undefined' && localStorage.getItem('popupClosed') === 'true')) return null;

    return (
        <div
            ref={popupRef}
            className={clsx(classes.popup, { [classes.active]: isPopupVisible })}
        >
            <button className={classes.closeNavBtn} onClick={closePopup}>
                <span></span>
                <span></span>
            </button>
            <div className={classes.popupWrapper}>
                <div onClick={closePopup} className={classes.popupCloseArea}></div>
                <Form className={classes.formPopup} />
            </div>
        </div>
    );
};

export default Popup;
