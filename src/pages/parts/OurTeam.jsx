import { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { SwiperSlide } from 'swiper/react';
import Container from '@/components/Container';
import classes from '../styles.module.scss';
import Image from 'next/image';
import logo from '@/public/images/view/logo(black).svg';
import logoNative from '@/public/images/view/logoFull.png'
import { clsx } from 'clsx';
import useIsVisible from '@/hooks/useIsVisible';
import Slider from '@/components/Slider/Slider';
import ButtonLink from '@/components/Button/Button';
import { books } from '@/constans/routes';


const getDoctorsData = () => [
    {
        nameKey: 'home:ourTeam:doctor:0',
        image: "/images/personal/OurTeamSection/img1.png",
        experience: "15+",
        quoteKey: 'home:ourTeam:quote:0',
        skillsKey: 'home:ourTeam:skills:0'
    },
    {
        nameKey: 'home:ourTeam:doctor:1',
        image: "/images/personal/OurTeamSection/img2.jpg",
        experience: "30+",
        quoteKey: 'home:ourTeam:quote:1',
        skillsKey: 'home:ourTeam:skills:1'
    },
    {
        nameKey: 'home:ourTeam:doctor:2',
        image: "/images/personal/OurTeamSection/img3.jpg",
        experience: "5+",
        quoteKey: 'home:ourTeam:quote:2',
        skillsKey: 'home:ourTeam:skills:2'
    },
    {
        nameKey: 'home:ourTeam:doctor:3',
        image: "/images/personal/OurTeamSection/img4.jpg",
        experience: "30+",
        quoteKey: 'home:ourTeam:quote:3',
        skillsKey: 'home:ourTeam:skills:3'
    },
    {
        nameKey: 'home:ourTeam:doctor:4',
        image: "/images/personal/OurTeamSection/img5.jpg",
        experience: "14+",
        quoteKey: 'home:ourTeam:quote:4',
        skillsKey: 'home:ourTeam:skills:4'
    },
    {
        nameKey: 'home:ourTeam:doctor:5',
        image: "/images/personal/OurTeamSection/img6.jpg",
        experience: "15+",
        quoteKey: 'home:ourTeam:quote:5',
        skillsKey: 'home:ourTeam:skills:5'
    },
    {
        nameKey: 'home:ourTeam:doctor:6',
        image: "/images/personal/OurTeamSection/doc6.png",
        experience: "30",
        quoteKey: 'home:ourTeam:quote:6',
        skillsKey: 'home:ourTeam:skills:6'
    },
    {
        nameKey: 'home:ourTeam:doctor:7',
        image: "/images/personal/OurTeamSection/img8.jpg",
        experience: "6+",
        quoteKey: 'home:ourTeam:quote:7',
        skillsKey: 'home:ourTeam:skills:7'
    },
    {
        nameKey: 'home:ourTeam:doctor:8',
        image: "/images/personal/OurTeamSection/img9.jpg",
        experience: "11+",
        quoteKey: 'home:ourTeam:quote:8',
        skillsKey: 'home:ourTeam:skills:8'
    },
    {
        nameKey: 'home:ourTeam:doctor:9',
        image: "/images/personal/OurTeamSection/img10.jpg",
        experience: "3",
        quoteKey: 'home:ourTeam:quote:9',
        skillsKey: 'home:ourTeam:skills:9'
    },
    {
        nameKey: 'home:ourTeam:doctor:10',
        image: "/images/personal/OurTeamSection/img11.jpg",
        experience: "5+",
        quoteKey: 'home:ourTeam:quote:10',
        skillsKey: 'home:ourTeam:skills:10'
    },
    {
        nameKey: 'home:ourTeam:doctor:11',
        image: "/images/personal/OurTeamSection/img12.jpg",
        experience: "20+",
        quoteKey: 'home:ourTeam:quote:11',
        skillsKey: 'home:ourTeam:skills:11'
    },
    {
        nameKey: 'home:ourTeam:doctor:12',
        image: "/images/personal/OurTeamSection/img13.jpg",
        experience: "18+",
        quoteKey: 'home:ourTeam:quote:12',
        skillsKey: 'home:ourTeam:skills:12'
    },
    {
        nameKey: 'home:ourTeam:doctor:13',
        image: "/images/personal/OurTeamSection/img14.jpg",
        experience: "3",
        quoteKey: 'home:ourTeam:quote:13',
        skillsKey: 'home:ourTeam:skills:13'
    },
];

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const OurTeam = () => {
    const { t, i18n } = useTranslation('home');
    const [activeIndex, setActiveIndex] = useState(null);
    const language = i18n.language;
    const isVisible = useIsVisible();

    const [displayedDoctors, setDisplayedDoctors] = useState([]);
    const doctorsData = getDoctorsData();


    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };


    useEffect(() => {
        const shuffledDoctors = shuffleArray(doctorsData);
        setDisplayedDoctors(shuffledDoctors.slice(0, 7));
    }, [language]);

    const topDoctors = displayedDoctors.slice(0, 3);
    const bottomDoctors = displayedDoctors.slice(4, 7);


    const removeOneBrTag = (text) => {
        const firstIndex = text.indexOf('<br/>');
        if (firstIndex === -1) return text;
        const secondIndex = text.indexOf('<br/>', firstIndex + 1);
        if (secondIndex === -1) return text;
        return text.slice(0, secondIndex) + text.slice(secondIndex + 5);
    };

    return (
        <section className={clsx(classes.OurTeam)}>
            <Container className={classes.container}>
                <h2 dangerouslySetInnerHTML={{ __html: t('home:OurTeamH1:0') }}>

                </h2>

                {isVisible ? (
                    <div className={classes.teamContainer}>
                        <div className={classes.topPart}>
                            {topDoctors.length > 0 ? (
                                topDoctors.map((doctor, index) => (
                                    <article
                                        key={index}
                                    >
                                        <Image
                                            src={doctor.image}
                                            alt='doctor'
                                            objectFit="cover"
                                            width={380}
                                            height={553}
                                            loading="eager"
                                            quality={100}
                                        />

                                        <div className={classes.about}>
                                            <p dangerouslySetInnerHTML={{ __html: t(doctor.nameKey) }}>

                                            </p>
                                            <p dangerouslySetInnerHTML={{ __html: t(doctor.skillsKey) }}>

                                            </p>
                                        </div>

                                        <p className={classes.experience}>
                                            <span>
                                                {doctor.experience}
                                            </span>
                                            <span>років досвіду</span>
                                        </p>

                                        <div className={clsx(classes.quoteCoverModal, classes.quoteCoverModalDesktop)}>
                                            <Image
                                                src={logo}
                                                className={classes.logo}
                                                alt='logo'
                                            />

                                            <svg className={classes.quotes} width="142" height="111" viewBox="0 0 142 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M59.9766 7V32.4375H53.7031C47.0869 32.4375 42.7283 33.8782 39.9245 36.8155C37.2445 39.6231 35.8063 43.9807 35.4194 50.3594H59.9766V103.922H7V59.5625C7 41.837 11.2831 28.6744 19.0442 19.9337C26.8213 11.175 37.9626 7 51.3594 7H59.9766ZM34.3672 51.3594C34.3813 51.0213 34.3981 50.688 34.4176 50.3594C35.2114 37.0185 40.5505 31.4375 53.7031 31.4375H58.9766V8H51.3594C24.9922 8 8 24.4062 8 59.5625V102.922H58.9766V51.3594H34.3672ZM134.977 50.3594V103.922H81.4141V59.5625C81.4141 41.8289 85.8476 28.6652 93.7576 19.9266C101.68 11.174 112.964 7 126.359 7H134.977V32.4375H128.703C122.088 32.4375 117.57 33.8779 114.615 36.8321C111.803 39.6446 110.234 44.0015 109.835 50.3594H134.977ZM108.781 51.3594C108.795 51.0213 108.812 50.688 108.833 50.3594C109.653 37.0185 115.551 31.4375 128.703 31.4375H133.977V8H126.359C99.9922 8 82.4141 24.4062 82.4141 59.5625V102.922H133.977V51.3594H108.781Z" fill="#9F9FA3" />
                                            </svg>

                                            <Image
                                                src={logoNative}
                                                className={classes.logoNative}
                                                alt='logoNative'
                                            />

                                            <p className={classes.quote} dangerouslySetInnerHTML={{ __html: t(doctor.quoteKey) }}>

                                            </p>

                                            <p className={classes.initials}>
                                                <Trans>{removeOneBrTag(t(doctor.nameKey))}</Trans>
                                            </p>

                                        </div>
                                    </article>
                                ))
                            ) : (
                                <p>Немає даних для відображення</p>
                            )}
                        </div>

                        <div className={classes.bottomPart}>
                            {bottomDoctors.length > 0 ? (
                                bottomDoctors.map((doctor, index) => (
                                    <article key={index}>
                                        <Image
                                            src={doctor.image}
                                            alt='doctor'
                                            objectFit="cover"
                                            width={380}
                                            height={553}
                                            loading="eager"
                                            quality={100}
                                        />
                                        <div className={classes.about}>
                                            <p dangerouslySetInnerHTML={{ __html: t(doctor.nameKey) }}>

                                            </p>
                                            <p dangerouslySetInnerHTML={{ __html: t(doctor.skillsKey) }}>

                                            </p>
                                        </div>

                                        <p className={classes.experience}>
                                            <span>
                                                {doctor.experience}
                                            </span>
                                            <span>р.Досвіду</span>
                                        </p>

                                        <div className={clsx(classes.quoteCoverModal, classes.quoteCoverModalBottom, classes.quoteCoverModalDesktop)}>
                                            <Image
                                                src={logo}
                                                className={classes.logo}
                                                alt='logo'
                                            />

                                            <svg className={classes.quotes} width="142" height="111" viewBox="0 0 142 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M59.9766 7V32.4375H53.7031C47.0869 32.4375 42.7283 33.8782 39.9245 36.8155C37.2445 39.6231 35.8063 43.9807 35.4194 50.3594H59.9766V103.922H7V59.5625C7 41.837 11.2831 28.6744 19.0442 19.9337C26.8213 11.175 37.9626 7 51.3594 7H59.9766ZM34.3672 51.3594C34.3813 51.0213 34.3981 50.688 34.4176 50.3594C35.2114 37.0185 40.5505 31.4375 53.7031 31.4375H58.9766V8H51.3594C24.9922 8 8 24.4062 8 59.5625V102.922H58.9766V51.3594H34.3672ZM134.977 50.3594V103.922H81.4141V59.5625C81.4141 41.8289 85.8476 28.6652 93.7576 19.9266C101.68 11.174 112.964 7 126.359 7H134.977V32.4375H128.703C122.088 32.4375 117.57 33.8779 114.615 36.8321C111.803 39.6446 110.234 44.0015 109.835 50.3594H134.977ZM108.781 51.3594C108.795 51.0213 108.812 50.688 108.833 50.3594C109.653 37.0185 115.551 31.4375 128.703 31.4375H133.977V8H126.359C99.9922 8 82.4141 24.4062 82.4141 59.5625V102.922H133.977V51.3594H108.781Z" fill="#9F9FA3" />
                                            </svg>

                                            <Image
                                                src={logoNative}
                                                className={classes.logoNative}
                                                alt='logoNative'
                                            />

                                            <p className={classes.quote} dangerouslySetInnerHTML={{ __html: t(doctor.quoteKey) }}>

                                            </p>

                                            <p className={classes.initials}>
                                                <Trans>{removeOneBrTag(t(doctor.nameKey))}</Trans>
                                            </p>

                                        </div>

                                    </article>
                                ))
                            ) : (
                                <p>Немає даних для відображення</p>
                            )}
                        </div>
                    </div>
                ) : (
                    <Slider className='swiperTeam'>

                        {doctorsData.map((doctor, index) => (
                            <SwiperSlide className='swiperSlide' key={index}>
                                <article
                                    className='swiperImageWrapper'
                                    onClick={() => handleClick(index)}
                                >
                                    <Image
                                        src={doctor.image}
                                        alt={`img${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        loading="eager"
                                    />
                                    <div className='about'>
                                        <p dangerouslySetInnerHTML={{ __html: t(doctor.nameKey) }}>

                                        </p>
                                        <p dangerouslySetInnerHTML={{ __html: t(doctor.skillsKey) }}>

                                        </p>
                                    </div>

                                    <p className='experience'>
                                        <span>
                                            {doctor.experience}
                                        </span>
                                        <span>р.Досвіду</span>
                                    </p>

                                    <div className={`quoteCoverModal ${activeIndex === index ? 'active' : ''}`}>

                                        <Image
                                            src={logo}
                                            className='logo'
                                            alt='logo'
                                        />

                                        <svg className='quotes' width="142" height="111" viewBox="0 0 142 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M59.9766 7V32.4375H53.7031C47.0869 32.4375 42.7283 33.8782 39.9245 36.8155C37.2445 39.6231 35.8063 43.9807 35.4194 50.3594H59.9766V103.922H7V59.5625C7 41.837 11.2831 28.6744 19.0442 19.9337C26.8213 11.175 37.9626 7 51.3594 7H59.9766ZM34.3672 51.3594C34.3813 51.0213 34.3981 50.688 34.4176 50.3594C35.2114 37.0185 40.5505 31.4375 53.7031 31.4375H58.9766V8H51.3594C24.9922 8 8 24.4062 8 59.5625V102.922H58.9766V51.3594H34.3672ZM134.977 50.3594V103.922H81.4141V59.5625C81.4141 41.8289 85.8476 28.6652 93.7576 19.9266C101.68 11.174 112.964 7 126.359 7H134.977V32.4375H128.703C122.088 32.4375 117.57 33.8779 114.615 36.8321C111.803 39.6446 110.234 44.0015 109.835 50.3594H134.977ZM108.781 51.3594C108.795 51.0213 108.812 50.688 108.833 50.3594C109.653 37.0185 115.551 31.4375 128.703 31.4375H133.977V8H126.359C99.9922 8 82.4141 24.4062 82.4141 59.5625V102.922H133.977V51.3594H108.781Z" fill="#9F9FA3" />
                                        </svg>

                                        <Image
                                            src={logoNative}
                                            className='logoNative'
                                            alt='logoNative'
                                        />

                                        <p className='quote' dangerouslySetInnerHTML={{ __html: t(doctor.quoteKey) }}>

                                        </p>

                                        <p className='initials'>
                                            <Trans>{removeOneBrTag(t(doctor.nameKey))}</Trans>
                                        </p>

                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Slider>
                )}


            </Container>

            <div className={classes.buttonWrapper}>
                <ButtonLink className={classes.button} href={books.ourTeam}>
                    <p>
                        <span dangerouslySetInnerHTML={{ __html: t('home:ourTeam:button:0') }}>

                        </span>

                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4698 11.0532C11.2301 11.2917 10.8419 11.2889 10.6056 11.0472C10.372 10.8083 10.3749 10.4257 10.6119 10.1902L11.913 8.89802C12.3858 8.42843 12.0571 7.62149 11.3907 7.61591L1.14293 7.53009C0.796625 7.52724 0.518321 7.2441 0.521195 6.89786C0.524093 6.55159 0.807153 6.27323 1.15343 6.27612L11.4033 6.36196C12.0694 6.36753 12.4116 5.56681 11.9473 5.08919L10.6652 3.77031C10.4325 3.53096 10.4368 3.14864 10.6747 2.91455C10.9147 2.67848 11.301 2.6828 11.5356 2.92416L15.0038 6.49183C15.2902 6.78641 15.2863 7.2566 14.9951 7.54637L11.4698 11.0532Z" fill="#5A6DB4"></path></svg>
                    </p>
                </ButtonLink>
            </div>

        </section>
    );
};

export default OurTeam;