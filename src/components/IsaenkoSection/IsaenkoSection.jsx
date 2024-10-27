import Image from 'next/image';
import Container from '../Container';
import classes from './styles.module.scss';
import isaenkoImage from '../../../public/images/personal/dr-isaenko.png';
import imageForComments from '../../../public/images/isaenko-comments.png';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import logo from '@/public/images/view/logo(black).svg';
import logoNative from '@/public/images/view/logoFull.png'
import { useState } from 'react';


const IsaenkoSection = ({ title, className }) => {
    const { t } = useTranslation('general');
    const [active, setActive] = useState(false)
    return (
        <section className={clsx(classes.isaenkoSection, className)}>
            <Container className={classes.container}>
                <article className={classes.left}>
                    <div
                        className={clsx(classes.imageWrapper, classes.imageWrapperDesktop)}
                        onMouseEnter={() => setActive(true)}
                        onMouseLeave={() => { setActive(false) }}
                    >


                        <div className={clsx(classes.hoverContent, { [classes.active]: active })}>
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

                            <p className={classes.name} dangerouslySetInnerHTML={{ __html: t('general:isaenkoSection:1') }}>
                            </p>

                            <p className={classes.quote} dangerouslySetInnerHTML={{ __html: t('general:isaenkoQuote') }}>

                            </p>



                        </div>
                        <Image
                            src={isaenkoImage}
                            alt='Isaenko'
                        />
                    </div>
                    <div
                        className={clsx(classes.imageWrapper, classes.imageWrapperMobile)}
                        onClick={() => { setActive(!active) }}
                    >


                        <div className={clsx(classes.hoverContent, { [classes.active]: active })}>
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

                            <p className={classes.name} dangerouslySetInnerHTML={{ __html: t('general:isaenkoSection:1') }}>
                            </p>

                            <p className={classes.quote} dangerouslySetInnerHTML={{ __html: t('general:isaenkoQuote') }}>

                            </p>



                        </div>
                        <Image
                            src={isaenkoImage}
                            alt='Isaenko'
                        />
                    </div>

                    <div className={classes.skills}>
                        <span>10+</span>
                        <span dangerouslySetInnerHTML={{ __html: t('general:isaenkoSection:0') }}></span>
                    </div>
                    <div className={classes.about}>
                        <p dangerouslySetInnerHTML={{ __html: t('general:isaenkoSection:1') }}>
                        </p>
                        <p dangerouslySetInnerHTML={{ __html: t('general:isaenkoSection:2') }}>
                        </p>
                    </div>
                </article>

                <div className={classes.right}>
                    <p className={classes.mark}>
                        <svg width="142" height="111" viewBox="0 0 142 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M59.9766 7V32.4375H53.7031C47.0869 32.4375 42.7283 33.8782 39.9245 36.8155C37.2445 39.6231 35.8063 43.9807 35.4194 50.3594H59.9766V103.922H7V59.5625C7 41.837 11.2831 28.6744 19.0442 19.9337C26.8213 11.175 37.9626 7 51.3594 7H59.9766ZM34.3672 51.3594C34.3813 51.0213 34.3981 50.688 34.4176 50.3594C35.2114 37.0185 40.5505 31.4375 53.7031 31.4375H58.9766V8H51.3594C24.9922 8 8 24.4062 8 59.5625V102.922H58.9766V51.3594H34.3672ZM134.977 50.3594V103.922H81.4141V59.5625C81.4141 41.8289 85.8476 28.6652 93.7576 19.9266C101.68 11.174 112.964 7 126.359 7H134.977V32.4375H128.703C122.088 32.4375 117.57 33.8779 114.615 36.8321C111.803 39.6446 110.234 44.0015 109.835 50.3594H134.977ZM108.781 51.3594C108.795 51.0213 108.812 50.688 108.833 50.3594C109.653 37.0185 115.551 31.4375 128.703 31.4375H133.977V8H126.359C99.9922 8 82.4141 24.4062 82.4141 59.5625V102.922H133.977V51.3594H108.781Z" fill="#9F9FA3" />
                        </svg>

                    </p>
                    <p dangerouslySetInnerHTML={title} className={classes.title}>
                    </p>

                    <div className={classes.initials}>
                        <Image
                            src={imageForComments}
                            alt='Isaenko-comments'
                            quality={100}
                            width={40}
                            height={40}
                        />
                        <div>
                            <span dangerouslySetInnerHTML={{ __html: t('general:isaenkoSection:3') }}></span>
                            <span dangerouslySetInnerHTML={{ __html: t('general:isaenkoSection:4') }}></span>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default IsaenkoSection;