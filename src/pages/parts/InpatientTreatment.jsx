import Container from '@/components/Container';
import classes from '../styles.module.scss';
import Slider from '@/components/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import useIsVisible from '@/hooks/useIsVisible';


const images = [
    {
        image: '/images/view/InpatientTreatment/img1.jpg',
        alt: 'Comfortable patient room with modern amenities'
    },
    {
        image: '/images/view/InpatientTreatment/img2.jpg',
        alt: 'Inpatient facility entrance with welcoming environment'
    },
    {
        image: '/images/view/InpatientTreatment/img3.jpg',
        alt: 'Patient receiving care from a doctor in a well-equipped room'
    },
    {
        image: '/images/view/InpatientTreatment/img4.jpg',
        alt: 'Nurse attending to a patient in a bright and clean ward'
    },
    {
        image: '/images/view/InpatientTreatment/img5.jpg',
        alt: 'Modern inpatient facility with advanced medical equipment'
    },
    {
        image: '/images/view/InpatientTreatment/img6.jpg',
        alt: 'Comfortable and spacious inpatient ward'
    },
    {
        image: '/images/view/InpatientTreatment/img7.jpg',
        alt: 'Private patient room with all necessary amenities'
    }
];

const InpatientTreatment = () => {

    const { t } = useTranslation();

    const visible = useIsVisible();
    return (
        <section className={classes.InpatientTreatment}>
            <Container className={classes.container}>

                {visible ? (
                    <>
                        <div className={classes.left}>
                            <h2 dangerouslySetInnerHTML={{ __html: t('home:inpatientTreatment:0') }}>

                            </h2>
                            <p>
                                <span dangerouslySetInnerHTML={{ __html: t('home:inpatientTreatment:1') }}>

                                </span>
                                <span dangerouslySetInnerHTML={{ __html: t('home:inpatientTreatment:2') }}>

                                </span>
                            </p>
                        </div>

                        <Slider className='inpatientTreatment'>
                            {images.map((image, index) => (
                                <SwiperSlide className='swiperSlide' key={index}>
                                    <div className='swiperImageWrapper'>
                                        <Image
                                            src={image.image}
                                            alt={image.alt}
                                            loading="eager"
                                            width={600}
                                            height={490}
                                            quality={100}
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Slider>
                    </>
                ) : (
                    <div className={classes.left}>
                        <h2 dangerouslySetInnerHTML={{ __html: t('home:inpatientTreatment:0') }}>

                        </h2>
                        <Slider>
                            {images.map((image, index) => (
                                <SwiperSlide className='swiperSlide' key={index}>
                                    <div className='swiperImageWrapper'>
                                        <Image
                                            src={image.image}
                                            alt={image.alt}
                                            layout="fill"
                                            objectFit="cover"
                                            loading="eager"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Slider>
                        <p>
                            <span dangerouslySetInnerHTML={{ __html: t('home:inpatientTreatment:1') }}>

                            </span>
                            <span dangerouslySetInnerHTML={{ __html: t('home:inpatientTreatment:2') }}>

                            </span>
                        </p>
                    </div>


                )}


            </Container>
        </section>
    );
};

export default InpatientTreatment;