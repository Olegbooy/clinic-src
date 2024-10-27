import classes from './styles.module.scss';
import logoUa from '../../../public/logo-head-ua.png';
import logoRu from '../../../public/logo-head-ru.png';
import logoEn from '../../../public/logo-head-en.png';
import Image from "next/image";
import Container from "../Container";
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { links, routes } from '@/constans/routes';
import useIsVisible from '@/hooks/useIsVisible';
import clsx from 'clsx';
import { manrope } from '@/fonts/fonts';
import { useCityEventEmitter } from '@/hooks/useCityEventEmitter';



const socialLinks = [
    {
        icon: (<svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_331_71" maskUnits="userSpaceOnUse" x="0" y="0" width="35" height="36">
                <path d="M35 0.160156H0V35.1602H35V0.160156Z" fill="white" />
            </mask>
            <g mask="url(#mask0_331_71)">
                <path d="M25.5769 0.160156H9.42308C6.92474 0.162829 4.5295 1.15647 2.76291 2.92307C0.996317 4.68966 0.00267249 7.0849 0 9.58324V25.7371C0.00267249 28.2355 0.996317 30.6307 2.76291 32.3973C4.5295 34.1639 6.92474 35.1575 9.42308 35.1602H25.5769C28.0753 35.1575 30.4705 34.1639 32.2371 32.3973C34.0037 30.6307 34.9973 28.2355 35 25.7371V9.58324C34.9973 7.0849 34.0037 4.68966 32.2371 2.92307C30.4705 1.15647 28.0753 0.162829 25.5769 0.160156ZM17.5 25.7371C15.9025 25.7371 14.3409 25.2634 13.0127 24.3759C11.6845 23.4884 10.6492 22.227 10.0379 20.7511C9.42657 19.2752 9.26662 17.6512 9.57827 16.0845C9.88992 14.5177 10.6592 13.0785 11.7888 11.949C12.9183 10.8194 14.3575 10.0501 15.9243 9.73843C17.491 9.42678 19.115 9.58673 20.5909 10.1981C22.0668 10.8094 23.3282 11.8447 24.2157 13.1729C25.1032 14.5011 25.5769 16.0627 25.5769 17.6602C25.5747 19.8016 24.723 21.8548 23.2088 23.369C21.6946 24.8832 19.6414 25.7349 17.5 25.7371ZM27.5962 9.58324C27.1968 9.58324 26.8064 9.46481 26.4743 9.24294C26.1423 9.02106 25.8835 8.7057 25.7306 8.33673C25.5778 7.96777 25.5378 7.56177 25.6157 7.17007C25.6936 6.77838 25.8859 6.41859 26.1683 6.13619C26.4507 5.8538 26.8105 5.66149 27.2022 5.58357C27.5939 5.50566 27.9999 5.54565 28.3689 5.69848C28.7378 5.85131 29.0532 6.11012 29.2751 6.44218C29.497 6.77424 29.6154 7.16464 29.6154 7.56401C29.6154 8.09954 29.4026 8.61314 29.024 8.99182C28.6453 9.3705 28.1317 9.58324 27.5962 9.58324ZM22.8846 17.6602C22.8846 18.7252 22.5688 19.7662 21.9771 20.6517C21.3855 21.5372 20.5445 22.2274 19.5606 22.6349C18.5767 23.0425 17.494 23.1491 16.4495 22.9414C15.405 22.7336 14.4456 22.2207 13.6925 21.4677C12.9395 20.7146 12.4266 19.7552 12.2188 18.7107C12.0111 17.6662 12.1177 16.5835 12.5253 15.5996C12.9328 14.6157 13.623 13.7747 14.5085 13.1831C15.394 12.5914 16.435 12.2756 17.5 12.2756C18.9281 12.2756 20.2977 12.8429 21.3075 13.8527C22.3173 14.8625 22.8846 16.2321 22.8846 17.6602Z" fill="white" />
            </g>
        </svg>
        ), link: 'https://www.instagram.com/dr.isaenko.clinic?igsh=aXNncTBnNHR1ZTVt'
    },
]

const chatsIcons = [
    {
        icon: (<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_331_190" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="34">
                <path d="M33.83 0.330078H0.5V33.6601H33.83V0.330078Z" fill="white" />
            </mask>
            <g mask="url(#mask0_331_190)">
                <path d="M17.1692 0.330078H17.1608C7.97217 0.330078 0.5 7.80433 0.5 16.9951C0.5 20.6405 1.67488 24.0194 3.6726 26.7629L1.59572 32.9539L8.00133 30.9062C10.6365 32.6518 13.7799 33.6601 17.1692 33.6601C26.3578 33.6601 33.83 26.1837 33.83 16.9951C33.83 7.80641 26.3578 0.330078 17.1692 0.330078Z" fill="#4CAF50" />
                <path d="M26.8669 23.8631C26.4649 24.9984 24.8692 25.94 23.5964 26.2149C22.7257 26.4003 21.5883 26.5482 17.7595 24.9609C12.8621 22.9319 9.70821 17.9553 9.4624 17.6325C9.22701 17.3096 7.4834 14.9973 7.4834 12.6059C7.4834 10.2144 8.69786 9.04998 9.18743 8.55001C9.58947 8.13963 10.254 7.95215 10.8914 7.95215C11.0977 7.95215 11.2831 7.96256 11.4497 7.9709C11.9392 7.99173 12.185 8.02089 12.5079 8.79376C12.91 9.76241 13.889 12.1538 14.0057 12.3996C14.1244 12.6455 14.2432 12.9788 14.0765 13.3016C13.9203 13.6349 13.7828 13.7828 13.537 14.0661C13.2912 14.3495 13.0579 14.5661 12.8121 14.8702C12.5871 15.1348 12.3329 15.4181 12.6163 15.9076C12.8996 16.3867 13.8786 17.9845 15.3201 19.2677C17.1804 20.9238 18.6886 21.4529 19.2281 21.6779C19.6301 21.8445 20.1093 21.805 20.403 21.4925C20.7759 21.0904 21.2362 20.4238 21.7049 19.7677C22.0382 19.2969 22.459 19.2385 22.9006 19.4052C23.3506 19.5614 25.7316 20.7384 26.2211 20.9821C26.7107 21.2279 27.0336 21.3446 27.1523 21.5508C27.269 21.757 27.269 22.7257 26.8669 23.8631Z" fill="#FAFAFA" />
            </g>
        </svg>
        ), link: 'https://wa.me/+380978888911', name: 'WhatsApp'
    },
    {
        icon: (<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.83 16.9951C33.83 26.1983 26.3682 33.6601 17.165 33.6601C7.96175 33.6601 0.5 26.1983 0.5 16.9951C0.5 7.79183 7.96175 0.330078 17.165 0.330078C26.3682 0.330078 33.83 7.79183 33.83 16.9951Z" fill="url(#paint0_linear_539_972)" />
            <path opacity="0.05" d="M5.59839 16.5499C12.3936 13.4711 20.3744 10.1306 21.6035 9.6473C24.3132 8.58155 25.4948 9.67063 25.3098 11.408C25.0823 13.5369 24.0041 19.7321 23.3408 24.1708C22.9525 26.7681 21.546 27.5638 19.9587 26.5564C18.7546 25.7924 14.615 23.0818 13.526 22.1552C12.7835 21.5236 12.2661 20.8154 12.7927 20.0938C12.9469 19.8829 13.341 19.458 13.5601 19.2463C14.6592 18.1814 14.5109 17.9523 13.1818 18.903C13.0235 19.0164 12.1053 19.6821 11.7278 19.9338C10.8029 20.5504 9.95215 20.5837 8.50976 20.0938C7.32988 19.693 6.19666 19.3838 5.48173 19.0747C4.49433 18.6472 4.11604 17.2215 5.59839 16.5499Z" fill="black" />
            <path opacity="0.07" d="M6.19637 16.6543C12.5058 13.8337 20.265 10.6015 21.3999 10.1441C24.1196 9.04586 25.1203 9.69746 24.8279 11.8197C24.5562 13.7846 23.5922 19.8639 22.9164 23.9394C22.5181 26.3383 21.3549 26.8666 19.84 25.8867C18.891 25.2751 15.0713 22.7587 14.1448 22.0262C13.4282 21.4605 12.6857 20.8072 13.5532 19.8614C13.8431 19.5456 15.4446 18 16.642 16.8501C17.3361 16.1826 17.0886 15.8535 16.2512 16.4268C14.7155 17.4792 12.2033 19.1448 11.755 19.4473C10.9009 20.0223 10.0985 20.1606 8.70196 19.7215C7.60123 19.3748 6.53801 19.039 5.9839 18.8232C4.74569 18.3433 4.72902 17.31 6.19637 16.6543Z" fill="black" />
            <path d="M6.79388 16.7595C12.6183 14.1973 20.155 11.0734 21.1958 10.641C23.9247 9.50941 24.7621 9.72606 24.3446 12.2325C24.0447 14.034 23.1797 19.9975 22.4898 23.7097C22.0807 25.9111 21.1624 26.1719 19.7193 25.2195C19.0252 24.7612 15.5213 22.444 14.7606 21.8998C14.0665 21.4041 13.1091 20.8074 14.3098 19.6326C14.7372 19.2143 17.5378 16.5395 19.7201 14.4581C20.0059 14.1848 19.6468 13.7357 19.3168 13.9548C16.3754 15.9054 12.2975 18.6127 11.7784 18.9651C10.9943 19.4976 10.241 19.7417 8.8895 19.3534C7.86794 19.0601 6.87054 18.7102 6.48225 18.5768C4.98657 18.0636 5.34153 17.3986 6.79388 16.7595Z" fill="white" />
            <defs>
                <linearGradient id="paint0_linear_539_972" x1="5.38118" y1="5.21126" x2="28.9488" y2="28.7789" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#33BEF0" />
                    <stop offset="1" stopColor="#0A85D9" />
                </linearGradient>
            </defs>
        </svg>
        ), link: 'https://t.me/Dr_IsaenkoClinic', name: 'Telegram'
    },
]



const Footer = () => {
    const visible = useIsVisible();
    const { t, i18n } = useTranslation();
    const [selectedCity] = useCityEventEmitter();


    const logos = {
        uk: logoUa,
        ru: logoRu,
        en: logoEn
    };

    const logoSrc = logos[i18n.language] || logoUa;





    return (
        <footer className={clsx(classes.footer, manrope.className)}>
            <Container className={classes.container}>
                <div className={`${classes.col} ${classes.col1}`}>
                    <Image
                        src={logoSrc}
                        alt='logo'
                        quality={100}
                    />
                    <p dangerouslySetInnerHTML={{ __html: t('footer:license:0') }}>

                    </p>

                    <div className={classes.socialLinks}>

                        {socialLinks.map((item, index) => (
                            <Link href={item.link} key={index} passHref legacyBehavior>
                                <a target="_blank" rel="noopener noreferrer" className={classes.iconWrapper}>
                                    {item.icon}
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
                {!visible ? (
                    <div className={classes.colsWrapper}>
                        <div className={`${classes.col} ${classes.col2}`}>
                            <p dangerouslySetInnerHTML={{ __html: t('footer:nav:0') }}>

                            </p>
                            <nav>

                                {links.map((item, index) => (
                                    <Link shallow={true} scroll={true} key={index + index} href={item.link} legacyBehavior>
                                        <a><span dangerouslySetInnerHTML={{ __html: t(item.title) }}></span></a>

                                    </Link>
                                ))}

                            </nav>
                        </div>
                        <div className={`${classes.col} ${classes.col3}`}>
                            <p dangerouslySetInnerHTML={{ __html: t('footer:routes:0') }}>

                            </p>
                            <nav>
                                {routes.map((route, index) => (

                                    <Link key={index} href={route.link}>
                                        <span dangerouslySetInnerHTML={{ __html: t(route.title) }}></span>
                                    </Link>

                                ))}
                                <Link href='/treatment'>
                                    <span dangerouslySetInnerHTML={{ __html: t('footer:inpatientTreatment') }}>
                                    </span>
                                </Link>
                            </nav>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className={`${classes.col} ${classes.col2}`}>
                            <p dangerouslySetInnerHTML={{ __html: t('footer:nav:0') }}>

                            </p>
                            <nav>

                                {links.map((item, index) => (
                                    <Link key={index + index} href={item.link}>
                                        <span dangerouslySetInnerHTML={{ __html: t(item.title) }}>

                                        </span>
                                    </Link>
                                ))}



                            </nav>
                        </div>
                        <div className={`${classes.col} ${classes.col3}`}>
                            <p dangerouslySetInnerHTML={{ __html: t('footer:routes:0') }}>

                            </p>
                            <nav>
                                {routes.map((route, index) => (
                                    <Link key={index} href={route.link}>
                                        <span dangerouslySetInnerHTML={{ __html: t(route.title) }}></span>
                                    </Link>
                                ))}
                                <Link href='/inpatient-treatment'>
                                    <span dangerouslySetInnerHTML={{ __html: t('footer:inpatientTreatment') }}>
                                    </span>
                                </Link>
                            </nav>
                        </div>
                    </>
                )}

                <div className={`${classes.col} ${classes.col4}`}>

                    <div className={classes.top}>
                        <p className={classes.title} dangerouslySetInnerHTML={{ __html: t('footer:schedule:0') }}>
                        </p>
                        <div className={classes.scheduleBlock}>
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: t('footer:schedule:1') }}></p>
                                <p>10:00 - 20:00</p>
                            </div>
                            <div>
                                <p dangerouslySetInnerHTML={{ __html: t('footer:schedule:2') }}></p>
                                <p>10:00 - 18:00</p>
                            </div>
                            <div>

                                <p dangerouslySetInnerHTML={{ __html: t('footer:schedule:3') }}></p>
                                {selectedCity === 'kyiv' ? (
                                    <p dangerouslySetInnerHTML={{ __html: t('footer:schedule:4') }}></p>
                                ) : selectedCity === 'kharkiv' ? (
                                    <p>11:00 - 16:00</p>
                                ) : null}

                            </div>
                            {selectedCity === 'kharkiv' ? (
                                <div>
                                    <p className={classes.stationary} dangerouslySetInnerHTML={{ __html: t('footer:inpatientTreatmentWorksAllDay') }}></p>
                                </div>
                            ) : null
                            }
                        </div>
                    </div>

                    <div className={classes.bottom}>

                        <p dangerouslySetInnerHTML={{ __html: t('footer:chat') }}></p>

                        <div>
                            {chatsIcons.map((item, index) => (
                                <Link href={item.link} key={index}>
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

            </Container>

            <Container className={classes.containerPolicy}>
                <p dangerouslySetInnerHTML={{ __html: t('footer:policy:0') }}>

                </p>
                <div>
                    <a dangerouslySetInnerHTML={{ __html: t('footer:policy:1') }} href='/offer-agreement.pdf' target="_blank" rel="noopener noreferrer"></a>
                    <p dangerouslySetInnerHTML={{ __html: t('footer:policy:2') }}>

                    </p>
                    <p dangerouslySetInnerHTML={{ __html: t('footer:policy:3') }}>

                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;