import { useEffect, useState } from 'react';
import Container from '@/components/Container';
import classes from './Inpatient.module.scss';
import ClinicImage from '@/public/images/view/about-clinic-page.png'
import { Trans, useTranslation } from 'react-i18next';
import Image from 'next/image';
import InfoSection from '@/components/InfoSection/InfoSection';
import Multimodal from '../parts/Multimodal';
import HoverCardsInfo from '@/components/HoverCardsInfo/HoverCardsInfo';
import TabsQa from '@/components/TabsQA/TabsQa';
import logoFull from '@/public/images/view/logoFull.png'
import DoctorCard from '@/components/DoctorCard/DoctorCard';
import { db } from '@/db/firebase';
import { ref, get } from 'firebase/database';
import { NextSeo } from 'next-seo';

const index = () => {
    const [doctors, setDoctors] = useState([]);
    const doctorIds = [8, 25, 24, 11];

    const { t } = useTranslation('inpatientTreatmentPage')

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

    const shedule = [
        { time: '8:00-8:30', description: 'inpatientTreatmentPage:schedule:colls:0' },
        { time: '8:30-8:40', description: 'inpatientTreatmentPage:schedule:colls:10' },
        { time: '8:40-9:00', description: 'inpatientTreatmentPage:schedule:colls:1' },
        { time: '9:00-9:30', description: 'inpatientTreatmentPage:schedule:colls:2' },
        { time: '10:00-11:30', description: 'inpatientTreatmentPage:schedule:colls:3' },
        { time: '11:30-12:00', description: 'inpatientTreatmentPage:schedule:colls:4' },
        { time: '12:00-14:00', description: 'inpatientTreatmentPage:schedule:colls:5' },
        { time: '14:00-14:30', description: 'inpatientTreatmentPage:schedule:colls:6' },
        { time: '14:30-15:30', description: 'inpatientTreatmentPage:schedule:colls:7' },
        { time: '15:30-16:30', description: 'inpatientTreatmentPage:schedule:colls:8' },
        { time: '16:30-17:00', description: 'inpatientTreatmentPage:schedule:colls:9' }

    ]

    const sheduleTwo = [
        { time: '18:30-19:00', description: 'inpatientTreatmentPage:scheduleTwo:colls:0' },
        { time: '19:00-20:00', description: 'inpatientTreatmentPage:scheduleTwo:colls:1' },
        { time: '20:00-20:30', description: 'inpatientTreatmentPage:scheduleTwo:colls:2' },
        { time: '20:30-21:00', description: 'inpatientTreatmentPage:scheduleTwo:colls:3' },
        { time: '21:00-21:30', description: 'inpatientTreatmentPage:scheduleTwo:colls:4' },
        { time: '22:00', description: 'inpatientTreatmentPage:scheduleTwo:colls:5' }
    ]

    const infoLicensing = [
        { title: 'home:certificate:0', subtitle: 'home:certificate:3' },
        { title: 'home:certificate:1', subtitle: 'home:certificate:4' },
        { title: 'home:certificate:2', subtitle: 'home:certificate:5' },
        { title: '1', subtitle: 'home:certificate:6' }
    ]


    useEffect(() => {
        const fetchDoctors = async () => {
            const doctorsData = [];

            for (const id of doctorIds) {
                const doctorRef = ref(db, `/${id}`);
                const snapshot = await get(doctorRef);
                if (snapshot.exists()) {
                    doctorsData.push({ id, ...snapshot.val() });
                }
            }

            setDoctors(doctorsData);
        };

        fetchDoctors();
    }, []);

    return (
        <>
            <NextSeo
                title={t('head:pages:4')}
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
            <main className={classes.main}>
                <section
                    className={classes.intro}
                >
                    <Container className={classes.container}>
                        <div className={classes.left}>
                            <h2 dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:title') }}>
                            </h2>
                            <p dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:subtitle') }}>
                            </p>
                            <p className={classes.points}>
                                <span dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:points:0') }}></span>
                                <span dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:points:1') }}></span>
                                <span dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:points:2') }}></span>
                                <span dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:points:3') }}></span>
                                <span dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:points:4') }}></span>
                                <span dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:points:5') }}></span>
                                <span dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:points:6') }}></span>
                                <span dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:points:7') }}></span>
                                <span dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:points:8') }}></span>
                                <span dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:points:9') }}></span>
                                <span dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:points:10') }}></span>
                                <span dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:points:11') }}></span>
                                <span dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:points:12') }}></span>
                                <span dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:points:13') }}></span>
                            </p>
                        </div>


                    </Container>
                    <div className={classes.clinicImageWrapper}>
                        <Image

                            src={ClinicImage}
                            alt='clinic'
                        />
                    </div>

                </section>

                <InfoSection className={classes.infoSection} images={images} title={{ __html: t('inpatientTreatmentPage:rules:title') }}>
                    <span style={{ fontWeight: '600' }} dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:rules:subtitle') }}></span>
                    <span style={{ fontWeight: '600' }} dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:rules:points:0') }}></span>
                    <span style={{ fontWeight: '600' }} dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:rules:points:1') }}></span>
                    <span style={{ fontWeight: '600' }} dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:rules:points:2') }}></span>
                    <span style={{ fontWeight: '600' }} dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:rules:points:3') }}></span>
                </InfoSection>


                <section className={classes.servicesInpatient}>
                    <Container className={classes.container}>
                        <h2 dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:servicesTreatment:title') }}></h2>
                        <p className={classes.subtitle} dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:servicesTreatment:subtitle') }}></p>

                        <div className={classes.grid}>

                            <div className={classes.col}>
                                <div className={classes.icons}>
                                    <svg width="147" height="147" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_532_11170)">
                                            <path d="M68.5385 9.00024V48.6926H93.3462V53.6541H83.4231V63.5772H123.115V53.6541H113.192V48.6926H138V9.00024H68.5385ZM78.4615 18.9233H128.077V38.7695H78.4615V18.9233ZM31.3269 33.8079C24.4854 33.8079 18.9231 39.3703 18.9231 46.2118C18.9231 53.0533 24.4854 58.6156 31.3269 58.6156C38.1684 58.6156 43.7308 53.0533 43.7308 46.2118C43.7308 39.3703 38.1684 33.8079 31.3269 33.8079ZM9 58.6156V138H18.9231V128.077C18.9231 125.092 20.8999 123.116 23.8846 123.116H123.115C126.1 123.116 128.077 125.092 128.077 128.077V138H138V103.269H18.9231V58.6156H9ZM30.8618 63.112C27.3926 63.112 24.9118 66.4843 25.9002 69.469L31.7921 90.8656C32.7805 95.3233 36.7924 98.3079 41.25 98.3079H53.6538L45.2812 66.5231C44.2928 64.5462 42.2966 63.112 40.3197 63.112H30.8618ZM53.6538 73.5002L60.631 98.3079H128.077V83.4233C128.077 77.9579 123.619 73.5002 118.154 73.5002H53.6538Z" fill="#F4F4F4" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_532_11170">
                                                <rect width="129" height="129" fill="white" transform="translate(9 9)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>

                                <p dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:servicesTreatment:service:0') }}></p>
                            </div>

                            <div className={classes.col}>
                                <div className={classes.icons}>
                                    <svg width="147" height="147" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_532_11170)">
                                            <path d="M68.5385 9.00024V48.6926H93.3462V53.6541H83.4231V63.5772H123.115V53.6541H113.192V48.6926H138V9.00024H68.5385ZM78.4615 18.9233H128.077V38.7695H78.4615V18.9233ZM31.3269 33.8079C24.4854 33.8079 18.9231 39.3703 18.9231 46.2118C18.9231 53.0533 24.4854 58.6156 31.3269 58.6156C38.1684 58.6156 43.7308 53.0533 43.7308 46.2118C43.7308 39.3703 38.1684 33.8079 31.3269 33.8079ZM9 58.6156V138H18.9231V128.077C18.9231 125.092 20.8999 123.116 23.8846 123.116H123.115C126.1 123.116 128.077 125.092 128.077 128.077V138H138V103.269H18.9231V58.6156H9ZM30.8618 63.112C27.3926 63.112 24.9118 66.4843 25.9002 69.469L31.7921 90.8656C32.7805 95.3233 36.7924 98.3079 41.25 98.3079H53.6538L45.2812 66.5231C44.2928 64.5462 42.2966 63.112 40.3197 63.112H30.8618ZM53.6538 73.5002L60.631 98.3079H128.077V83.4233C128.077 77.9579 123.619 73.5002 118.154 73.5002H53.6538Z" fill="#F4F4F4" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_532_11170">
                                                <rect width="129" height="129" fill="white" transform="translate(9 9)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <svg width="147" height="147" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_532_11170)">
                                            <path d="M68.5385 9.00024V48.6926H93.3462V53.6541H83.4231V63.5772H123.115V53.6541H113.192V48.6926H138V9.00024H68.5385ZM78.4615 18.9233H128.077V38.7695H78.4615V18.9233ZM31.3269 33.8079C24.4854 33.8079 18.9231 39.3703 18.9231 46.2118C18.9231 53.0533 24.4854 58.6156 31.3269 58.6156C38.1684 58.6156 43.7308 53.0533 43.7308 46.2118C43.7308 39.3703 38.1684 33.8079 31.3269 33.8079ZM9 58.6156V138H18.9231V128.077C18.9231 125.092 20.8999 123.116 23.8846 123.116H123.115C126.1 123.116 128.077 125.092 128.077 128.077V138H138V103.269H18.9231V58.6156H9ZM30.8618 63.112C27.3926 63.112 24.9118 66.4843 25.9002 69.469L31.7921 90.8656C32.7805 95.3233 36.7924 98.3079 41.25 98.3079H53.6538L45.2812 66.5231C44.2928 64.5462 42.2966 63.112 40.3197 63.112H30.8618ZM53.6538 73.5002L60.631 98.3079H128.077V83.4233C128.077 77.9579 123.619 73.5002 118.154 73.5002H53.6538Z" fill="#F4F4F4" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_532_11170">
                                                <rect width="129" height="129" fill="white" transform="translate(9 9)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>

                                <p dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:servicesTreatment:service:1') }}></p>
                            </div>

                            <div className={classes.col}>
                                <div className={classes.icons}>
                                    <svg width="115" height="103" viewBox="0 0 115 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.2691 0.298828C6.04106 0.298828 0.961426 5.37846 0.961426 11.6065V44.4695C3.78835 41.6426 7.74162 39.8757 12.2691 39.8757H23.5768V28.5681C23.5768 28.5681 31.4834 17.2604 57.4999 17.2604C83.5164 17.2604 91.423 28.5681 91.423 28.5681V39.8757H102.731C107.258 39.8757 111.211 41.6426 114.038 44.4695V11.6065C114.038 5.37846 108.959 0.298828 102.731 0.298828H12.2691ZM12.2691 45.5296C6.04106 45.5296 0.961426 50.6092 0.961426 56.8373V102.068H12.2691V96.4142C12.2691 93.0131 14.5218 90.7604 17.923 90.7604H97.0768C100.478 90.7604 102.731 93.0131 102.731 96.4142V102.068H114.038V56.8373C114.038 50.6092 108.959 45.5296 102.731 45.5296H12.2691Z" fill="#F4F4F4" />
                                    </svg>

                                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M62.6953 0.84375H42.0234C41.7527 0.84375 41.5312 1.06523 41.5312 1.33594V5.92969C41.5312 6.20039 41.7527 6.42188 42.0234 6.42188H55.1813L38.8324 22.7707C34.7309 19.6125 29.727 17.9062 24.4688 17.9062C18.1605 17.9062 12.2215 20.3672 7.76719 24.8297C3.31289 29.2922 0.84375 35.223 0.84375 41.5312C0.84375 47.8395 3.30469 53.7785 7.76719 58.2328C12.2215 62.6953 18.1605 65.1562 24.4688 65.1562C30.777 65.1562 36.716 62.6953 41.1703 58.2328C45.6328 53.7785 48.0938 47.8395 48.0938 41.5312C48.0938 36.273 46.3875 31.2855 43.2375 27.184L59.5781 10.8434V23.9766C59.5781 24.2473 59.7996 24.4688 60.0703 24.4688H64.6641C64.9348 24.4688 65.1562 24.2473 65.1562 23.9766V3.30469C65.1562 1.95117 64.0488 0.84375 62.6953 0.84375ZM24.4688 58.9219C14.8793 58.9219 7.07812 51.1207 7.07812 41.5312C7.07812 31.9418 14.8793 24.1406 24.4688 24.1406C34.0582 24.1406 41.8594 31.9418 41.8594 41.5312C41.8594 51.1207 34.0582 58.9219 24.4688 58.9219Z" fill="#F4F4F4" />
                                    </svg>


                                </div>

                                <p dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:servicesTreatment:service:2') }}></p>
                            </div>

                            <div className={classes.col}>
                                <div className={classes.icons}>
                                    <svg width="115" height="103" viewBox="0 0 115 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.2691 0.298828C6.04106 0.298828 0.961426 5.37846 0.961426 11.6065V44.4695C3.78835 41.6426 7.74162 39.8757 12.2691 39.8757H23.5768V28.5681C23.5768 28.5681 31.4834 17.2604 57.4999 17.2604C83.5164 17.2604 91.423 28.5681 91.423 28.5681V39.8757H102.731C107.258 39.8757 111.211 41.6426 114.038 44.4695V11.6065C114.038 5.37846 108.959 0.298828 102.731 0.298828H12.2691ZM12.2691 45.5296C6.04106 45.5296 0.961426 50.6092 0.961426 56.8373V102.068H12.2691V96.4142C12.2691 93.0131 14.5218 90.7604 17.923 90.7604H97.0768C100.478 90.7604 102.731 93.0131 102.731 96.4142V102.068H114.038V56.8373C114.038 50.6092 108.959 45.5296 102.731 45.5296H12.2691Z" fill="#F4F4F4" />
                                    </svg>


                                    <svg width="48" height="74" viewBox="0 0 48 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M40.4719 40.0187C44.8687 35.6219 47.2969 29.7648 47.2969 23.5469C47.2969 17.3207 44.877 11.4719 40.4719 7.075C36.075 2.67812 30.218 0.25 24 0.25C17.782 0.25 11.925 2.66992 7.52813 7.075C3.13125 11.4801 0.703125 17.3207 0.703125 23.5469C0.703125 28.7805 2.41758 33.7516 5.57578 37.8121C6.17461 38.5832 6.82266 39.3133 7.51992 40.0187C8.21719 40.716 8.95547 41.3641 9.71836 41.9629C12.9668 44.4895 16.7977 46.0973 20.8828 46.6387V55.375H11.5312C11.1703 55.375 10.875 55.6703 10.875 56.0312V60.9531C10.875 61.3141 11.1703 61.6094 11.5312 61.6094H20.8828V73.0938C20.8828 73.4547 21.1781 73.75 21.5391 73.75H26.4609C26.8219 73.75 27.1172 73.4547 27.1172 73.0938V61.6094H36.4688C36.8297 61.6094 37.125 61.3141 37.125 60.9531V56.0312C37.125 55.6703 36.8297 55.375 36.4688 55.375H27.1172V46.6387C32.1621 45.966 36.8133 43.6773 40.4719 40.0187ZM24 40.6094C19.4391 40.6094 15.1652 38.8375 11.9332 35.6137C8.70937 32.3898 6.9375 28.1078 6.9375 23.5469C6.9375 18.9859 8.70937 14.7121 11.9332 11.4801C15.157 8.24805 19.4391 6.48438 24 6.48438C28.5609 6.48438 32.8348 8.25625 36.0668 11.4801C39.2906 14.7039 41.0625 18.9859 41.0625 23.5469C41.0625 28.1078 39.2906 32.3816 36.0668 35.6137C32.8348 38.8375 28.5609 40.6094 24 40.6094Z" fill="#F4F4F4" />
                                    </svg>

                                </div>

                                <p dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:servicesTreatment:service:3') }}></p>
                            </div>
                        </div>
                    </Container>
                </section>


                <div className={classes.shedule}>
                    <Container className={classes.container}>
                        <h2 dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:schedule:title') }}></h2>
                        <p className={classes.subtitle} dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:schedule:subtitle') }}></p>

                        <div className={classes.grid}>
                            {shedule.map((item, index) => (
                                <div key={index} className={classes.box}>
                                    <div className={classes.diseaseWrapper}>
                                        <p>
                                            {item.time}
                                        </p>
                                        <p dangerouslySetInnerHTML={{ __html: t(item.description) }}></p>
                                    </div>
                                </div>
                            ))}
                            <div className={classes.box}>
                                <div className={classes.diseaseWrapper}>
                                    <p style={{ wordBreak: 'break-word', fontSize: '21px' }} dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:schedule:colls:11') }}>
                                    </p>
                                    <p style={{ wordBreak: 'break-word' }} dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:schedule:colls:12') }}></p>
                                </div>
                            </div>
                        </div>


                        <div className={classes.sheduleTwo}>
                            <Image
                                width={200}
                                height={200}
                                src={logoFull}
                            />
                            <p>
                                17:00-18:30
                            </p>
                            <p dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:scheduleTwo:subtitle') }}>
                            </p>
                        </div>

                        <div className={classes.grid} style={{ marginTop: '0' }}>
                            {sheduleTwo.map((item, index) => (
                                <div key={index} className={classes.box}>
                                    <div className={classes.diseaseWrapper}>
                                        <p>
                                            {item.time}
                                        </p>
                                        <p dangerouslySetInnerHTML={{ __html: t(item.description) }}></p>
                                    </div>


                                </div>
                            ))}
                        </div>
                    </Container>
                </div>

                <div className={classes.doctorsContainer}>
                    <Container className={classes.container}>
                        <h1 dangerouslySetInnerHTML={{ __html: t('inpatientTreatmentPage:specialists') }}></h1>
                        {doctors.length === 0 ? (
                            <p>
                                <Trans>
                                    loading:0
                                </Trans>
                            </p>
                        ) : (

                            <div className={classes.gridDoctors}>
                                {doctors.map((doctor) => (
                                    <DoctorCard key={doctor.id} doctor={doctor} />
                                ))}
                            </div>


                        )}
                    </Container>
                </div>




                <Multimodal />

                <HoverCardsInfo className={classes.hoverCardsInfo} info={infoLicensing} />

                <TabsQa />
            </main>
        </>
    );
};

export default index;