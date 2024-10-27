import InfoSection from '@/components/InfoSection/InfoSection';
import { useTranslation } from 'react-i18next';
import classes from '../styles.module.scss';

const TrustCompany = () => {

    const { t } = useTranslation('home');

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

    return (
        <InfoSection className={classes.infoSection} images={images} title={{ __html: t('home:infoContainer:0') }}>
            <span dangerouslySetInnerHTML={{ __html: t('home:infoContainer:1') }}></span>
            <span dangerouslySetInnerHTML={{ __html: t('home:infoContainer:2') }}></span>
            <span dangerouslySetInnerHTML={{ __html: t('home:infoContainer:3') }}></span>
            <span dangerouslySetInnerHTML={{ __html: t('home:infoContainer:4') }}></span>
            <span dangerouslySetInnerHTML={{ __html: t('home:infoContainer:5') }}></span>
        </InfoSection>
    );
};

export default TrustCompany;