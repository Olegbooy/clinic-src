import { useState } from 'react';
import classes from './styles.module.scss';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import Mobile from './Mobile';
import CitySelector from './CitySelector';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import Routes from './Routes';
import { books } from '@/constans/routes';
import { manrope } from '@/fonts/fonts';
import logoUa from '../../../public/logo-head-ua(black).png';
import logoRu from '../../../public/logo-head-ru(black).png';
import logoEn from '../../../public/logo-head-en(black).png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCityEventEmitter } from '@/hooks/useCityEventEmitter';



const Navigation = ({ activeMenu, setActiveMenu, style }) => {
    const { t, i18n } = useTranslation('header');
    const router = useRouter();
    const [selectedCity] = useCityEventEmitter();
    const [isChecked, setIsChecked] = useState(true);
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const isKiev = selectedCity === 'kyiv';



    const logos = {
        uk: logoUa,
        ru: logoRu,
        en: logoEn
    };

    const logoSrc = logos[i18n.language] || logoUa;

    return (
        <nav
            style={style}

            className={clsx(classes.bottomHeader, { [classes.active]: activeMenu })}
        >
            <div className={classes.topMobPart}>
                <Image
                    className={classes.logo}
                    src={logoSrc}
                    alt='logo'
                    loading="eager"
                    quality={100}
                />
                <div className={classes.right}>
                    <LanguageSwitcher />
                    <button className={classes.closeNavBtn} onClick={() => setActiveMenu(false)}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            <div
                className={classes.left}
            >
                <Routes setActiveMenu={setActiveMenu} />

                <ul>
                    <li><Link onClick={() => setActiveMenu(false)} scroll={false} className={clsx(classes.mobBtns, manrope.className, { [classes.active]: router.pathname === books.aboutClinic })} href={books.aboutClinic}><span dangerouslySetInnerHTML={{ __html: t('header:menu:1') }}></span></Link></li>
                    <li><Link onClick={() => setActiveMenu(false)} scroll={false} className={clsx(classes.mobBtns, manrope.className, { [classes.active]: router.pathname === books.ourTeam })} href={books.ourTeam}><span dangerouslySetInnerHTML={{ __html: t('header:menu:2') }}></span></Link></li>
                    <li><Link onClick={() => setActiveMenu(false)} scroll={false} className={clsx(classes.mobBtns, manrope.className, { [classes.active]: router.pathname === books.treatment })} href={books.treatment}><span dangerouslySetInnerHTML={{ __html: t('header:menu:3') }}></span></Link></li>
                    <li><Link onClick={() => setActiveMenu(false)} scroll={false} className={clsx(classes.mobBtns, manrope.className, { [classes.active]: router.pathname === books.contact })} href={books.contact}><span dangerouslySetInnerHTML={{ __html: t('header:menu:4') }}></span></Link></li>
                </ul>
            </div>

            {/* <ButtonLink className={clsx(classes.onlineRegistration, manrope.className)} href='https://cbox.mobi/go/isaenko'>
                <Trans>
                    header:menu:5
                </Trans>
            </ButtonLink> */}

            <div className={clsx(classes.appoinmentButtonWrapper, manrope.className)}>
                <Link className={clsx(classes.link, { [classes.disabled]: !isChecked })} href={isChecked ? "https://cbox.mobi/go/isaenko" : "#"} passHref legacyBehavior>
                    <a className={clsx(classes.link, { [classes.disabled]: !isChecked })} target="_blank" rel="noopener noreferrer" dangerouslySetInnerHTML={{ __html: t('header:menu:5') }}>

                    </a>
                </Link>

                <div className={classes.offerAgreement}>

                    <label className={classes.checkboxContainer}>
                        <input className={classes.checkbox} type='checkbox' checked={isChecked} onChange={handleCheckboxChange} />
                        <span className={classes.checkmark}>
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.4995 0.440554C11.8085 0.716427 11.8353 1.19054 11.5595 1.49952L4.4166 9.49952C4.27431 9.65889 4.0708 9.75001 3.85715 9.75001C3.6435 9.75001 3.43999 9.65889 3.2977 9.49952L0.440554 6.29952C0.164681 5.99054 0.191518 5.51643 0.500496 5.24055C0.809473 4.96468 1.28359 4.99152 1.55946 5.3005L3.85715 7.87391L10.4406 0.500496C10.7164 0.191518 11.1905 0.164681 11.4995 0.440554Z"
                                    fill="#363853"
                                />
                            </svg>

                        </span>
                    </label>

                    <div className={clsx(classes.text, { [classes.kiev]: isKiev })}>
                        <span dangerouslySetInnerHTML={{ __html: t('offerAgreement:0') }}></span> <a href='/offer-agreement.pdf' target="_blank" rel="noopener noreferrer"><span dangerouslySetInnerHTML={{ __html: t('offerAgreement:1') }}></span></a>
                    </div>

                </div>

            </div>



            <div className={clsx(classes.bottomMobParts, manrope.className)}>
                <span dangerouslySetInnerHTML={{ __html: t('header:number') }} className={classes.name}></span>
                <Mobile />
                <CitySelector />
            </div>


        </nav>
    );
};

export default Navigation;