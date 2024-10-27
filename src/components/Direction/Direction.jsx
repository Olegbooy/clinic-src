import { Trans, useTranslation } from "react-i18next";
import { useState } from "react";
import Container from "../Container";
import classes from "./Direction.module.scss";
import Image from "next/image";
import clsx from "clsx";
import Form from "@/components/Form/Form";
import DoctorCard from "../DoctorCard/DoctorCard";
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";
import { HandySvg } from "handy-svg";
import logoNative from '@/public/images/view/logoFull.svg';
import ButtonLink from "../Button/Button";
import { useRouter } from "next/router";

const images = [
    { src: '/images/view/slider/homePage/image1.png', alt: 'slide1' },
    { src: '/images/view/slider/homePage/image2.png', alt: 'slide2' },
    { src: '/images/view/slider/homePage/image3.png', alt: 'slide3' },
    { src: '/images/view/slider/homePage/image4.png', alt: 'slide4' },
    { src: '/images/view/slider/homePage/image5.png', alt: 'slide5' },
    { src: '/images/view/slider/homePage/image6.png', alt: 'slide6' },
    { src: '/images/view/slider/homePage/image7.png', alt: 'slide7' },
    { src: '/images/view/slider/homePage/image8.png', alt: 'slide8' },
    { src: '/images/view/slider/homePage/image9.png', alt: 'slide9' },
    { src: '/images/view/slider/homePage/image10.png', alt: 'slide10' },
    { src: '/images/view/slider/homePage/image11.png', alt: 'slide11' },
    { src: '/images/view/slider/homePage/image12.png', alt: 'slide12' }
]

const tabsColls = [
    { icon: (<HandySvg src='/icons/tabsDirections/1.svg' width='39' height='46' />), nameDisease: 'directionTabs:diseases:0', numberOccured: '30000' },
    { icon: (<HandySvg src='/icons/tabsDirections/2.svg' width='52' height='52' />), nameDisease: 'directionTabs:diseases:1', numberOccured: '350000' },
    { icon: (<HandySvg src='/icons/tabsDirections/3.svg' width='46' height='46' />), nameDisease: 'directionTabs:diseases:2', numberOccured: '150000' },
    { icon: (<HandySvg src='/icons/tabsDirections/4.svg' width='36' height='49' />), nameDisease: 'directionTabs:diseases:3', numberOccured: '300000' },
    { icon: (<HandySvg src='/icons/tabsDirections/5.svg' width='46' height='46' />), nameDisease: 'directionTabs:diseases:4', numberOccured: '150000' },
    { icon: (<HandySvg src='/icons/tabsDirections/6.svg' width='46' height='46' />), nameDisease: 'directionTabs:diseases:5', numberOccured: '90000' },
    { icon: (<HandySvg src='/icons/tabsDirections/7.svg' width='40' height='47' />), nameDisease: 'directionTabs:diseases:6', numberOccured: '5000' },
    { icon: (<HandySvg src='/icons/tabsDirections/8.svg' width='47' height='47' />), nameDisease: 'directionTabs:diseases:7', numberOccured: '60000' },
    { icon: (<HandySvg src='/icons/tabsDirections/9.svg' width='35' height='46' />), nameDisease: 'directionTabs:diseases:8', numberOccured: '120000' },
    { icon: (<HandySvg src='/icons/tabsDirections/10.svg' width='44' height='44' />), nameDisease: 'directionTabs:diseases:9', numberOccured: '7000' },
    { icon: (<HandySvg src='/icons/tabsDirections/11.svg' width='49' height='49' />), nameDisease: 'directionTabs:diseases:10', numberOccured: '35000 +' },
    { icon: (<HandySvg src='/icons/tabsDirections/12.svg' width='50' height='50' />), nameDisease: 'directionTabs:diseases:11', numberOccured: '150000' }
]




const Direction = ({ doctor, nameDirection, titleDirection, subtitleDirection }) => {
    const [activeSelect, setActiveSelect] = useState(0);

    const router = useRouter();
    const isUltrasound = router.pathname === '/ultrasound' || router.asPath === '/ultrasound';


    const { t } = useTranslation();

    return (
        <>
            <section className={classes.direction}>
                <div className={classes.directionBanner}>
                    <Container className={classes.container}>
                        <div className={classes.line}>
                            <div className={classes.left}>
                                <h3 dangerouslySetInnerHTML={{ __html: t(nameDirection) }} className={classes.title}></h3>
                                <div className={classes.description}>
                                    <p dangerouslySetInnerHTML={{ __html: t(titleDirection) }}></p>
                                    <p dangerouslySetInnerHTML={{ __html: t(subtitleDirection) }}></p>
                                </div>
                                <ButtonLink href='https://cbox.mobi/go/isaenko' className={classes.button}>
                                    <span dangerouslySetInnerHTML={{ __html: t('header:menu:5') }}></span>
                                    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.4698 11.0532C11.2301 11.2917 10.8419 11.2889 10.6056 11.0472C10.372 10.8083 10.3749 10.4257 10.6119 10.1902L11.913 8.89802C12.3858 8.42843 12.0571 7.62149 11.3907 7.61591L1.14293 7.53009C0.796625 7.52724 0.518321 7.2441 0.521195 6.89786C0.524093 6.55159 0.807153 6.27323 1.15343 6.27612L11.4033 6.36196C12.0694 6.36753 12.4116 5.56681 11.9473 5.08919L10.6652 3.77031C10.4325 3.53096 10.4368 3.14864 10.6747 2.91455C10.9147 2.67848 11.301 2.6828 11.5356 2.92416L15.0038 6.49183C15.2902 6.78641 15.2863 7.2566 14.9951 7.54637L11.4698 11.0532Z" fill="#5A6DB4"></path>
                                    </svg>
                                </ButtonLink>
                            </div>
                            <Slider className='sliderDirection'>
                                {images.map((image, index) => (
                                    <SwiperSlide className='swiperSlide' key={index}>
                                        <div className='swiperImageWrapper'>
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                layout='fill'
                                                objectFit="cover"
                                                loading="eager"
                                                quality={100}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Slider>
                        </div>
                    </Container>
                </div>
            </section>

            <section className={classes.directionDoctor}>
                <Container className={classes.container}>
                    {isUltrasound ? (
                        <>
                            <h2 className={classes.title} dangerouslySetInnerHTML={{ __html: t('directionPages:specialists') }}>

                            </h2>
                            <div className={classes.gridDoctor}>
                                {doctor.map((specialist) => (
                                    <DoctorCard key={specialist.id} doctor={specialist} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={classes.select}>
                                <button
                                    onClick={() => setActiveSelect(0)}
                                    className={clsx({
                                        [classes.active]: activeSelect === 0,
                                    })}
                                >
                                    {t('directionTabs:tabButtons:0')}
                                </button>
                                <button
                                    onClick={() => setActiveSelect(1)}
                                    className={clsx({
                                        [classes.active]: activeSelect === 1,
                                    })}
                                >
                                    {t('directionTabs:tabButtons:1')}
                                </button>
                            </div>
                            {activeSelect === 0 ? (
                                <div className={classes.gridDoctor}>
                                    {doctor.map((specialist) => (
                                        <DoctorCard key={specialist.id} doctor={specialist} />
                                    ))}
                                </div>
                            ) : (
                                <div className={classes.gridBox}>
                                    {tabsColls.map((item, index) => (
                                        <div key={index} className={classes.box}>
                                            <div className={classes.diseaseWrapper}>
                                                {item.icon}
                                                <p dangerouslySetInnerHTML={{ __html: t(item.nameDisease) }}></p>
                                            </div>
                                            <div className={classes.numberOccuredWrapperBox}>
                                                <div className={classes.logoWrapper}>
                                                    <Image
                                                        src={logoNative}
                                                        alt='native'
                                                        width={55}
                                                        height={55}
                                                    />
                                                </div>
                                                <p>
                                                    <Trans>
                                                        {item.numberOccured} <br />
                                                        {t('directionTabs:ocuured')}
                                                    </Trans>
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </Container>
            </section>

            <Form />
        </>
    );
};

export default Direction;
