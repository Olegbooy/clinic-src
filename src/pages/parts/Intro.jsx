import { useEffect, useState } from 'react';
import { useCityEventEmitter } from '@/hooks/useCityEventEmitter';
import Container from '@/components/Container';
import classes from '../styles.module.scss';
import ButtonLink from '@/components/Button/Button';
import { Trans, useTranslation } from 'react-i18next';
import Image from 'next/image';
import { motion, useTransform, useScroll, } from 'framer-motion';
import { clsx } from 'clsx';
import { manrope } from '@/fonts/fonts';





const cityImages = {
    kyiv: { src: '/images/view/kiev.png', alt: 'Клініка Києва' },
    kharkiv: { src: '/images/view/kharkiv.png', alt: 'Клініка Харкова' }
};

const Intro = () => {
    const [selectedCity] = useCityEventEmitter()
    const [currentCity, setCurrentCity] = useState(selectedCity);
    const [isImageVisible, setIsImageVisible] = useState(true);
    const { t } = useTranslation();
    const [isLoaded, setIsLoaded] = useState(false);



    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setCurrentCity(selectedCity);
            setIsImageVisible(true);
        }, 10);

        return () => clearTimeout(timeoutId);
    }, [selectedCity]);

    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 350], [0, 1]);



    return (
        <section
            className={clsx(classes.intro, manrope.className)}
        >
            <Image
                key={selectedCity}
                src={cityImages[currentCity]?.src || cityImages.kharkiv.src}
                alt='Background Image'
                objectFit='cover'
                fill
                quality={100}
                priority={true}
                loading="eager"
                className={`${classes.backgroundImage} ${isImageVisible ? classes.backgroundImageVisible : ''} ${isLoaded ? classes.imageIsLoaded : ''}`}
                onLoadingComplete={() => setIsLoaded(true)}
            />


            <motion.div
                className={classes.backgroundImagePurpleWrapper}
                style={{ opacity }}
            >
                <Image
                    quality={100}
                    layout='fill'
                    objectFit='cover'
                    src='/images/view/Backgrcdcound.png'
                    alt='purple'
                />
            </motion.div>
            <Container className={classes.container}>
                <h1 className={manrope.className}>
                    <Trans>
                        home:intro:0
                    </Trans>
                </h1>

                <p className={manrope.className}>
                    <Trans>
                        home:intro:1
                    </Trans>
                </p>

                <ButtonLink className={manrope.className} href='/about'>
                    <p className={manrope.className} dangerouslySetInnerHTML={{ __html: t('home:intro:2') }}>
                    </p>
                </ButtonLink>
            </Container>
        </section>
    );
};

export default Intro;
