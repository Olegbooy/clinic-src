import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Container from '../Container';
import Image from 'next/image';
import classes from './styles.module.scss';
import CitySelector from './CitySelector';
import Mobile from './Mobile';
import LanguageSwitcher from './LanguageSwitcher';
import Navigation from './Navigation';
import HighCall from '../HighCall/HighCall';
import clsx from 'clsx';
import Link from 'next/link';
import logoUa from '../../../public/logo-head-ua.png';
import logoRu from '../../../public/logo-head-ru.png';
import logoEn from '../../../public/logo-head-en.png';
import { useTranslation } from 'react-i18next';
import Headroom from 'react-headroom';

const Header = ({ onCityChange }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [pin, setPin] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const { i18n } = useTranslation();
    const [top, setTop] = useState(0);
    const targetBlockRef = useRef(null);



    const logos = {
        uk: logoUa,
        ru: logoRu,
        en: logoEn
    };

    const logoSrc = logos[i18n.language] || logoUa;


    const closeNavMenu = () => {
        setPin(true)
        setActiveMenu(false)
    }

    useEffect(() => {
        const updateTop = () => {
            if (targetBlockRef.current) {
                setTop(targetBlockRef.current.offsetHeight);
            }
        };

        updateTop();
        window.addEventListener('resize', updateTop);
        return () => window.removeEventListener('resize', updateTop);
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <Headroom
                style={{
                    oTransition: 'all .5s ease-in-out',
                    top: pin ? '-14rem' : '0'
                }}
                onPin={() => setPin(false)}
                onUnpin={closeNavMenu}
                pinStart={300}
            >

                <HighCall ref={targetBlockRef} />
                <header
                    style={{
                        top: top ? `${top}px` : '0',
                    }}
                    className={clsx(
                        classes.header,
                        !isHomePage ? classes.headerOther : '',
                        scrolled ? classes.headerOther : ''
                    )}
                >
                    <Container className={`${classes.container} flex direction-column`}>
                        <div className={`${classes.topHeader} flex justify-between align-center width-f`}>
                            <Link href='/'>
                                <Image
                                    className={classes.logo}
                                    src={logoSrc}
                                    alt='logo'
                                    loading="eager"
                                    quality={100}
                                    w
                                    width={260}
                                    height={82}
                                />
                            </Link>

                            <div className={`${classes.topHeaderRight} flex justify-center align-center`}>
                                <CitySelector onCityChange={onCityChange} />
                                <Mobile />
                                <LanguageSwitcher />
                            </div>

                            <button className={classes.burger} onClick={() => setActiveMenu(true)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <Navigation
                            activeMenu={activeMenu}
                            setActiveMenu={setActiveMenu}
                        />
                    </Container>
                </header>

            </Headroom>
        </>
    );
};

export default Header;
