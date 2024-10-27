import classes from './Contacts.module.scss';
import { useTranslation } from 'react-i18next';
import Container from '@/components/Container';
import clsx from 'clsx';
import Form from '@/components/Form/Form';
import Command from '../team/parts/Command';
import TabsQa from '@/components/TabsQA/TabsQa';
import { NextSeo } from 'next-seo';

const index = () => {

    const { t } = useTranslation();

    return (
        <>
            <NextSeo
                title={t('head:pages:5')}
                description={t('head:main:2')}
                openGraph={{
                    url: 'https://dr-isaenko.com',
                    title: t('head:main:0'),
                    description: t('head:main:2'),
                    images: [
                        {
                            url: '/baghe_ua.jpg',
                            width: 1680,
                            height: 960,
                            alt: 'business card',
                        },
                    ],
                    site_name: t('head:main:0'),
                }}
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/favicon32.png',
                        sizes: '32x32'
                    },
                    {
                        rel: 'icon',
                        href: '/favicon150.png',
                        sizes: '150x150',
                    },
                ]}
            />
            <main style={{ background: '#FBF2EF' }}>
                <section className={classes.contacts}>
                    <Container className={classes.container}>
                        <h2 dangerouslySetInnerHTML={{ __html: t('header:menu:4') }}></h2>



                        <div className={clsx(classes.box, classes.box1)}>

                            <div className={classes.left}>
                                <p dangerouslySetInnerHTML={{ __html: t('header:kharkiv') }} className={classes.city}></p>

                                <div className={classes.col}>
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
                                            <p>11:00 - 16:00</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.col}>
                                    <p className={classes.title} dangerouslySetInnerHTML={{ __html: t('contacts:mobile') }}></p>
                                    <div className={classes.scheduleBlock}>
                                        <a href='tel:+380663777908'>
                                            <span>+38 (066) 377-79-08</span>
                                        </a>
                                    </div>
                                </div>

                                <div className={classes.col}>
                                    <p className={classes.title} dangerouslySetInnerHTML={{ __html: t('contacts:email') }}></p>
                                    <div className={classes.scheduleBlock}>
                                        <a href='mailto:dr.isaenko.clinic@gmail.com'>
                                            <span>dr.isaenko.clinic@gmail.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5129.001484273615!2d36.254566311836264!3d50.001969065639386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a1063384f5df%3A0xe922fc15147c8904!2zZHIuSXNhZW5rbyDQutC70LjQvdC40LrQsCDQvNC10L3RgtCw0LvRjNC90L7Qs9C-INC30LTQvtGA0L7QstGM0Y8!5e0!3m2!1sru!2sua!4v1723821550897!5m2!1sru!2sua"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                style={{ border: 0, width: '100%', maxWidth: '100%' }}


                            ></iframe>

                        </div>



                        <div className={classes.box}>

                            <div className={classes.left}>
                                <p dangerouslySetInnerHTML={{ __html: t('header:kyiv') }} className={classes.city}></p>

                                <div className={classes.col}>
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
                                            <p dangerouslySetInnerHTML={{ __html: t('footer:schedule:4') }}></p>
                                        </div>
                                    </div>
                                </div>

                                <div className={classes.col}>
                                    <p className={classes.title} dangerouslySetInnerHTML={{ __html: t('contacts:mobile') }}></p>
                                    <div className={classes.scheduleBlock}>
                                        <a href='tel:+380978888911'>
                                            <span>+38 (097) 88-88-911</span>
                                        </a>
                                    </div>
                                </div>

                                <div className={classes.col}>
                                    <p className={classes.title} dangerouslySetInnerHTML={{ __html: t('contacts:email') }}></p>
                                    <div className={classes.scheduleBlock}>
                                        <a href='mailto:dr.isaenko.clinic@gmail.com'>
                                            <span>dr.isaenko.clinic@gmail.com</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10166.439091932467!2d30.471987261305067!3d50.429741778358206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf578ffd1a35%3A0x2e9da363cab76eb3!2z0JrQu9C40L3QuNC60LAg0LzQtdC90YLQsNC70YzQvdC-0LPQviDQt9C00L7RgNC-0LLRjNGPIERyLiBJc2Flbmtv!5e0!3m2!1sru!2sua!4v1723879995565!5m2!1sru!2sua"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                style={{ border: 0, width: '100%', maxWidth: '100%' }}


                            ></iframe>

                        </div>
                    </Container>
                </section>

                <Form className={classes.form} />

                <Command className={classes.team} />
            </main>
            <TabsQa className={classes.tabs} />

        </>
    );
};

export default index;