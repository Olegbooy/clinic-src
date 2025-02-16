import classes from '../styles.module.scss';
import Image from 'next/image';
import Container from '@/components/Container';
import ClinicView from '@/public/images/view/about-clinic.png';
import ButtonLink from '@/components/Button/Button';
import { useTranslation } from 'react-i18next';


const AboutClinic = () => {
    const { t } = useTranslation();

    return (

        <section
            className={classes.aboutClinic}
        >
            <Container className={classes.container}>
                <div className={classes.left}>
                    <h2 dangerouslySetInnerHTML={{ __html: t('home:aboutClinic:0') }}>
                    </h2>
                    <p dangerouslySetInnerHTML={{ __html: t('home:aboutClinic:1') }}>
                    </p>
                    <ButtonLink href='/about'>
                        <p dangerouslySetInnerHTML={{ __html: t('home:aboutClinic:2') }}></p>
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4698 11.0532C11.2301 11.2917 10.8419 11.2889 10.6056 11.0472C10.372 10.8083 10.3749 10.4257 10.6119 10.1902L11.913 8.89802C12.3858 8.42843 12.0571 7.62149 11.3907 7.61591L1.14293 7.53009C0.796625 7.52724 0.518321 7.2441 0.521195 6.89786C0.524093 6.55159 0.807153 6.27323 1.15343 6.27612L11.4033 6.36196C12.0694 6.36753 12.4116 5.56681 11.9473 5.08919L10.6652 3.77031C10.4325 3.53096 10.4368 3.14864 10.6747 2.91455C10.9147 2.67848 11.301 2.6828 11.5356 2.92416L15.0038 6.49183C15.2902 6.78641 15.2863 7.2566 14.9951 7.54637L11.4698 11.0532Z" fill="#5A6DB4" />
                        </svg>
                    </ButtonLink>
                </div>

                <span></span>


            </Container>
            <div className={classes.clinicImageWrapper}>
                <Image

                    src={ClinicView}
                    alt='clinic'
                />
            </div>

        </section>


    );
};

export default AboutClinic;